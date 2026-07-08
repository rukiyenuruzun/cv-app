"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface EscapeBubbleProps {
  label: string;
  onCatch: (x: number, y: number) => void;
  disabled?: boolean;
}

export default function EscapeBubble({ label, onCatch, disabled }: EscapeBubbleProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      setPos({
        x: window.innerWidth / 2 - 80,
        y: window.innerHeight / 2 - 30,
      });
      initialized.current = true;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const bw = 180;
    const bh = 50;
    let newX: number, newY: number;
    let tries = 0;
    do {
      newX = Math.random() * (w - bw);
      newY = Math.random() * (h - bh);
      tries++;
    } while (
      tries < 20 &&
      Math.abs(newX - pos.x) < 120 &&
      Math.abs(newY - pos.y) < 60
    );
    const oldX = pos.x;
    const oldY = pos.y;
    setPos({ x: newX, y: newY });
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
      onCatch(oldX, oldY);
    }, 50);
  }, [pos, onCatch, disabled]);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        transition: "left 0.08s ease, top 0.08s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: disabled ? "none" : "auto",
        zIndex: 9999,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <button
        style={{
          padding: "12px 28px",
          fontSize: 16,
          fontWeight: 700,
          color: "#fff",
          background: "#14181c",
          border: "2px solid #e74c3c",
          borderRadius: 30,
          cursor: "pointer",
          whiteSpace: "nowrap",
          textShadow: "0 0 4px rgba(0,0,0,0.5)",
          ...(!disabled ? { animation: "glow-pulse 1.2s ease-in-out infinite" } : {}),
        }}
        className={!disabled ? "bubble-glow" : ""}
        onClick={() => {}}
      >
        {label}
      </button>
    </div>
  );
}
