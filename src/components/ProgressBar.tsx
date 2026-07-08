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
        height: 6,
        background: "#2a3a4a",
        zIndex: 10001,
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: `${pct}%`,
          background: "#e74c3c",
          transition: "width 0.5s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -6,
            top: -4,
            width: 14,
            height: 14,
            background: "#e74c3c",
            borderRadius: "50%",
            boxShadow: "0 0 6px rgba(231, 76, 60, 0.6)",
          }}
        />
      </div>
    </div>
  );
}
