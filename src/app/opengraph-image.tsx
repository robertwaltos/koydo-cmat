import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Koydo CMAT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ fontSize: 72, fontWeight: 700 }}>Koydo CMAT</div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.9 }}>Common Management Admission Test Prep</div>
      </div>
    ),
    { ...size }
  );
}
