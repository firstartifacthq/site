import { ImageResponse } from "next/og";

export const alt = "First Artifact: Obsession beats talent";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ef0000",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85 }}>
          First Artifact
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
            Obsession beats talent
          </div>
          <div style={{ display: "flex", maxWidth: 820, fontSize: 32, lineHeight: 1.3, opacity: 0.9 }}>
            A private club for the top 1% of builders and founders building with AI.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
