import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Syed Ali — websites for small business, fixed price";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "80px 80px 72px",
          background: "#F7F4EE",
          color: "#15120E",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              width: 120,
              height: 6,
              background: "#D6512B",
              marginBottom: 18,
            }}
          />
          <div
            style={{
              fontSize: 14,
              letterSpacing: 3.5,
              textTransform: "uppercase",
              color: "#15120E",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            SYED ALI · WEB DEVELOPER · QUETTA
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 64,
              lineHeight: 1.04,
              letterSpacing: -1.6,
              maxWidth: 810,
              fontWeight: 400,
              color: "#15120E",
            }}
          >
            Websites small businesses can actually run.
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 25,
              lineHeight: 1.3,
              color: "#6B635A",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: 500,
            }}
          >
            Fixed price. Fixed date. hello@syedalihax.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
