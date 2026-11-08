import { email, name } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-meta text-muted">
          {name} · Web Developer
        </p>
        <a
          href={`mailto:${email}`}
          className="font-mono text-meta text-ink"
        >
          {email}
        </a>
      </div>
    </footer>
  );
}
