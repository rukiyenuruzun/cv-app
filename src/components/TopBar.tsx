"use client";

export default function TopBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 50,
        background: "#0d1114",
        borderBottom: "1px solid #1f2a33",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        zIndex: 9998,
        gap: 20,
      }}
    >
      <span style={{ color: "#e74c3c", fontSize: 18, fontWeight: 800 }}>
        Film<span style={{ color: "#fff" }}>CV</span>
      </span>
      <span style={{ color: "#9ab", fontSize: 12, cursor: "pointer" }}>Filmler</span>
      <span style={{ color: "#9ab", fontSize: 12, cursor: "pointer" }}>Diziler</span>
      <span style={{ color: "#9ab", fontSize: 12, cursor: "pointer" }}>Listem</span>
      <div style={{ flex: 1 }} />
      <div
        style={{
          background: "#1f2a33",
          borderRadius: 4,
          padding: "4px 10px",
          fontSize: 11,
          color: "#9ab",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ fontSize: 10 }}>●</span>
        Canlı: 1.2K izleyici
      </div>
    </div>
  );
}
