"use client";

import { useState } from "react";
import FullCV from "./FullCV";

interface FinalModalProps {
  onClose: () => void;
}

export default function FinalModal({ onClose }: FinalModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.85)",
        zIndex: 20000,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: "#1c2329",
          borderRadius: 12,
          width: 960,
          maxWidth: "95vw",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            display: "flex",
            gap: 8,
            zIndex: 1,
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#9ab",
              fontSize: 22,
              cursor: "pointer",
              padding: "4px 10px",
              borderRadius: 4,
            }}
            title="Kapat"
          >
            ✕
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 400,
              minWidth: 350,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              borderRight: "1px solid #2a3a4a",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                flex: 1,
                overflow: "auto",
                borderRadius: 8,
                border: "1px solid #2a3a4a",
                background: "#fff",
              }}
            >
              <FullCV />
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: "44px 28px 28px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              overflowY: "auto",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Rukiye Nur Uzun
            </h2>
            <p style={{ color: "#9ab", fontSize: 14, margin: 0 }}>
              Computer Engineering Student
            </p>

            <div>
              <p style={{ color: "#9ab", fontSize: 13, marginBottom: 8, fontWeight: 600 }}>
                Puanın
              </p>
              <div style={{ display: "flex", gap: 6 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      fontSize: 34,
                      cursor: submitted ? "default" : "pointer",
                      color:
                        star <= (hoverRating || rating) ? "#f5c518" : "#2a3a4a",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={() => !submitted && setHoverRating(star)}
                    onMouseLeave={() => !submitted && setHoverRating(0)}
                    onClick={() => !submitted && setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <p style={{ color: "#9ab", fontSize: 13, marginBottom: 8, fontWeight: 600 }}>
                Yorumun
              </p>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="CV hakkında ne düşünüyorsun?"
                disabled={submitted}
                style={{
                  width: "100%",
                  minHeight: 120,
                  background: "#14181c",
                  border: "1px solid #2a3a4a",
                  borderRadius: 6,
                  color: "#e0e0e0",
                  padding: 12,
                  fontSize: 13,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <div>
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#2ecc71",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: 22 }}>✓</span>
                  Gönderildi
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "10px 28px",
                    background: rating > 0 ? "#e74c3c" : "#2a3a4a",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: rating > 0 ? "pointer" : "not-allowed",
                  }}
                  disabled={rating === 0}
                >
                  {rating > 0 ? "Gönder" : "Önce puan ver"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
