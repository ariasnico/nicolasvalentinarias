import { ImageResponse } from "next/og";
import { NAME } from "./site";

export const alt = NAME;
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
          justifyContent: "center",
          padding: "0 96px",
          background: "#0c0b0a",
          color: "#efe8dc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", fontSize: 112, lineHeight: 0.95, letterSpacing: "-0.035em" }}>
          <span>Nicolás</span>
          <span>Valentín</span>
          <span>Arias</span>
        </div>
        <div style={{ width: 56, height: 3, background: "#e07a3a", marginTop: 44 }} />
        <div style={{ marginTop: 36, fontSize: 34, color: "#7d776d" }}>
          Founder @ MedicAI · Arqueo — Puentes cohort 4
        </div>
      </div>
    ),
    size,
  );
}
