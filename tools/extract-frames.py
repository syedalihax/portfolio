#!/usr/bin/env python3
"""
Turn a source video into scroll-scrub frame sets.

This is NOT Copilot's job — it needs ffmpeg and produces the exact frame layout
that assets/frames/manifest.json describes.

Usage:
    python tools/extract-frames.py hero.mp4
    python tools/extract-frames.py hero.mp4 --desktop-count 120 --mobile-count 60

Outputs:
    assets/frames/desktop/f_0001.webp ... f_0120.webp   (1600x900, q72)
    assets/frames/mobile/f_0001.webp  ... f_0060.webp   (720x405,  q65)
    assets/frames/poster.webp
    assets/frames/manifest.json
"""
import argparse, json, os, subprocess, shutil, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "frames")

def run(cmd):
    p = subprocess.run(cmd, capture_output=True, text=True)
    if p.returncode != 0:
        print(p.stderr[-2000:], file=sys.stderr)
        raise SystemExit(f"ffmpeg failed: {' '.join(cmd[:6])}…")
    return p.stdout

def probe(video):
    out = run(["ffprobe", "-v", "error", "-select_streams", "v:0",
               "-show_entries", "stream=width,height,r_frame_rate,nb_frames,duration",
               "-show_entries", "format=duration",
               "-of", "json", video])
    d = json.loads(out)
    st = d["streams"][0]
    dur = float(st.get("duration") or d["format"]["duration"])
    num, den = (st.get("r_frame_rate") or "30/1").split("/")
    fps = float(num) / float(den or 1)
    return int(st["width"]), int(st["height"]), fps, dur

def extract(video, W, H, count, dest, quality):
    if os.path.isdir(dest):
        shutil.rmtree(dest)
    os.makedirs(dest, exist_ok=True)
    # -vf fps=<rate> gives an even spread across the clip regardless of source fps
    _, _, src_fps, dur = probe(video)
    rate = count / dur
    q = str(quality)
    cmd = ["ffmpeg", "-y", "-i", video,
           "-vf", f"fps={rate:.6f},scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},setsar=1",
           "-frames:v", str(count),
           "-c:v", "libwebp", "-quality", q, "-compression_level", "6",
           "-an", os.path.join(dest, "f_%04d.webp")]
    run(cmd)
    files = sorted(glob.glob(os.path.join(dest, "f_*.webp")))
    if not files:
        raise SystemExit("no frames produced")
    # ffmpeg numbers from 1; ensure contiguous 1..N
    for i, f in enumerate(files, start=1):
        want = os.path.join(dest, f"f_{i:04d}.webp")
        if f != want:
            os.rename(f, want)
    total = sum(os.path.getsize(f) for f in files)
    print(f"  {len(files):4} frames  {W}x{H}  q{quality}  {total/1e6:.2f} MB  -> {dest}")
    return len(files), total

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("video")
    ap.add_argument("--desktop-count", type=int, default=120)
    ap.add_argument("--mobile-count", type=int, default=60)
    ap.add_argument("--desktop-size", default="1600x900")
    ap.add_argument("--mobile-size", default="720x405")
    ap.add_argument("--desktop-q", type=int, default=72)
    ap.add_argument("--mobile-q", type=int, default=65)
    a = ap.parse_args()

    if not os.path.isfile(a.video):
        raise SystemExit(f"not found: {a.video}")
    if not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not on PATH")

    dw, dh = (int(x) for x in a.desktop_size.split("x"))
    mw, mh = (int(x) for x in a.mobile_size.split("x"))

    print(f"source: {a.video}")
    w, h, fps, dur = probe(a.video)
    print(f"  {w}x{h}  {fps:.2f} fps  {dur:.2f}s")
    if dur > 12:
        print("  ! clip is longer than 12s — scrubbers get heavy; consider 4-8s")

    os.makedirs(OUT, exist_ok=True)
    dn, dbytes = extract(a.video, dw, dh, a.desktop_count, os.path.join(OUT, "desktop"), a.desktop_q)
    mn, mbytes = extract(a.video, mw, mh, a.mobile_count, os.path.join(OUT, "mobile"), a.mobile_q)

    poster = os.path.join(OUT, "desktop", "f_0001.webp")
    shutil.copyfile(poster, os.path.join(OUT, "poster.webp"))

    manifest = {
        "desktop": {"count": dn, "width": dw, "height": dh,
                    "path": "assets/frames/desktop/f_{n:04d}.webp"},
        "mobile":  {"count": mn, "width": mw, "height": mh,
                    "path": "assets/frames/mobile/f_{n:04d}.webp"},
        "poster":  "assets/frames/poster.webp",
    }
    with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print("\nbudget check")
    print(f"  desktop {dbytes/1e6:5.2f} MB  (budget 12.00)  {'OK' if dbytes < 12e6 else 'OVER'}")
    print(f"  mobile  {mbytes/1e6:5.2f} MB  (budget  2.00)  {'OK' if mbytes < 2e6 else 'OVER'}")
    print(f"\nwrote {os.path.join(OUT,'manifest.json')}")

if __name__ == "__main__":
    main()
