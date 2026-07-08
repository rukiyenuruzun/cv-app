"use client";

import { ReactNode, useState } from "react";

interface AdPopupProps {
  sticker?: boolean;
  pulse?: boolean;
  leftImage?: string;
  rightImage?: string;
  children: ReactNode;
  zIndex: number;
  left: number;
  top: number;
}

export default function AdPopup({
  sticker,
  pulse,
  leftImage,
  rightImage,
  children,
  zIndex,
  left,
  top,
}: AdPopupProps) {
  const [tooltip, setTooltip] = useState(false);

  const closeBtn = (
    <div
      style={{
        position: "absolute",
        top: 6,
        right: 6,
        width: 24,
        height: 24,
        background: "#e74c3c",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "default",
        zIndex: 1,
      }}
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <span style={{ color: "#fff", fontSize: 14, fontWeight: "bold", lineHeight: 1 }}>
        ✕
      </span>
      {tooltip && (
        <div
          style={{
            position: "absolute",
            top: -28,
            right: 0,
            background: "#333",
            color: "#fff",
            padding: "3px 8px",
            borderRadius: 4,
            fontSize: 11,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          boşuna basma
        </div>
      )}
    </div>
  );

  const containerStyle: React.CSSProperties = {
    position: "fixed",
    left,
    top,
    width: 340,
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    color: "#222",
    fontSize: 13,
    zIndex,
    overflow: "hidden",
    ...(sticker
      ? {
          border: "3px solid white",
          boxShadow: "0 0 0 2px #ccc, 0 4px 20px rgba(0,0,0,0.5)",
          transform: "rotate(-1deg)",
        }
      : {}),
  };

  const stickerClass = sticker ? "sticker-effect" : "";
  const pulseClass = pulse ? "pulse-size" : "";

  return (
    <div className={`popup-enter ${stickerClass} ${pulseClass}`} style={containerStyle}>
      {closeBtn}
      <div
        style={{
          padding: "28px 16px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {leftImage && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              src={leftImage}
              alt=""
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          </div>
        )}
        {rightImage && (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <img
              src={rightImage}
              alt=""
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
                borderRadius: 8,
                ...(sticker
                  ? {
                      border: "3px solid white",
                      boxShadow: "0 0 0 2px #ccc",
                      transform: "rotate(2deg)",
                    }
                  : {}),
              }}
            />
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
