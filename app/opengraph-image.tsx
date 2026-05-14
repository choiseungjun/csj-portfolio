import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Seungjun Choi — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#18181B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: dot + tag */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#3B82F6",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3B82F6",
              fontWeight: 600,
            }}
          >
            Portfolio · 2026
          </span>
        </div>

        {/* Center: name + role */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#FAFAFA",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Seungjun Choi
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#71717A",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Senior Frontend Engineer · 9년차
          </div>
        </div>

        {/* Bottom: tags + url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {["Design System", "React", "Next.js", "AI Workflow"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 14px",
                  border: "1px solid #3F3F46",
                  borderRadius: "6px",
                  fontSize: "13px",
                  color: "#A1A1AA",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "#52525B",
              letterSpacing: "0.02em",
              fontFamily: "monospace",
            }}
          >
            sssjunn.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
