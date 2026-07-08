"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min((current / total) * 100, 100);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        background: "#1a1a1a",
        zIndex: 10001,
        borderTop: "1px solid #333",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, #e74c3c, #c0392b)",
          transition: "width 0.5s ease",
          boxShadow: "0 0 10px rgba(231, 76, 60, 0.6)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -8,
            top: -3,
            width: 16,
            height: 16,
            background: "#e74c3c",
            borderRadius: "50%",
            boxShadow: "0 0 12px rgba(231, 76, 60, 0.8)",
          }}
        />
      </div>
    </div>
  );
}
