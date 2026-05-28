import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Naoya Hayashi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(124,92,255,0.45), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(34,211,238,0.25), transparent 60%), #0a0a0f",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 700,
            letterSpacing: -4,
            backgroundImage:
              "linear-gradient(120deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          Naoya Hayashi
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: "#a1a1aa",
            display: "flex",
          }}
        >
          naoyahayashi37.github.io
        </div>
      </div>
    ),
    { ...size }
  );
}
