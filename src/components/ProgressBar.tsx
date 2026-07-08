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
        height: 4,
        background: "#2a3a4a",
        zIndex: 10001,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "#e74c3c",
          transition: "width 0.5s ease",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
