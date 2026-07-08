"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface EscapeBubbleProps {
  label: string;
  onCatch: (x: number, y: number) => void;
  disabled?: boolean;
}

export default function EscapeBubble({ label, onCatch, disabled }: EscapeBubbleProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const posRef = useRef(pos);
  const initDone = useRef(false);

  useEffect(() => {
    if (!initDone.current) {
      const x = window.innerWidth / 2 - 80;
      const y = window.innerHeight / 2 - 30;
      setPos({ x, y });
      posRef.current = { x, y };
      initDone.current = true;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const bw = 180;
    const bh = 50;
    const oldPos = posRef.current;
    let newX: number, newY: number;
    let tries = 0;
    do {
      newX = Math.random() * (w - bw);
      newY = Math.random() * (h - bh);
      tries++;
    } while (
      tries < 20 &&
      Math.abs(newX - oldPos.x) < 150 &&
      Math.abs(newY - oldPos.y) < 80
    );
    setPos({ x: newX, y: newY });
    posRef.current = { x: newX, y: newY };
    onCatch(oldPos.x, oldPos.y);
  }, [disabled, onCatch]);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transition: "left 0.15s ease, top 0.15s ease",
        opacity: disabled ? 0 : 1,
        pointerEvents: disabled ? "none" : "auto",
        zIndex: 9999,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <button
        style={{
          padding: "14px 32px",
          fontSize: 17,
          fontWeight: 700,
          color: "#fff",
          background: "#14181c",
          border: "2px solid #e74c3c",
          borderRadius: 30,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
        className={!disabled ? "bubble-glow" : ""}
      >
        {label}
      </button>
    </div>
  );
}
