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
        background: "rgba(0,0,0,0.7)",
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
          width: 760,
          maxWidth: "90vw",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Kapat + Ok tuşları */}
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
              fontSize: 20,
              cursor: "pointer",
              padding: "2px 6px",
              borderRadius: 4,
            }}
            title="Kapat"
          >
            ✕
          </button>
        </div>

        {/* Sol: Afiş / CV */}
        <div
          style={{
            display: "flex",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 280,
              minWidth: 200,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              borderRight: "1px solid #2a3a4a",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "2/3",
                background: "#14181c",
                borderRadius: 8,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #2a3a4a",
              }}
            >
              <FullCV />
            </div>
          </div>

          {/* Sağ: Puanlama + Yorum */}
          <div
            style={{
              flex: 1,
              padding: "40px 24px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              overflowY: "auto",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                margin: 0,
              }}
            >
              Rukiye Nur Uzun
            </h2>
            <p style={{ color: "#9ab", fontSize: 13, margin: 0 }}>
              Computer Engineering Student
            </p>

            {/* Yıldızlar */}
            <div>
              <p style={{ color: "#9ab", fontSize: 12, marginBottom: 6, fontWeight: 600 }}>
                Puanın
              </p>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      fontSize: 28,
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

            {/* Yorum */}
            <div style={{ flex: 1 }}>
              <p style={{ color: "#9ab", fontSize: 12, marginBottom: 6, fontWeight: 600 }}>
                Yorumun
              </p>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="CV hakkında ne düşünüyorsun?"
                disabled={submitted}
                style={{
                  width: "100%",
                  minHeight: 100,
                  background: "#14181c",
                  border: "1px solid #2a3a4a",
                  borderRadius: 6,
                  color: "#e0e0e0",
                  padding: 10,
                  fontSize: 13,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Gönder Butonu */}
            <div>
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#2ecc71",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: 20 }}>✓</span>
                  Gönderildi
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "8px 24px",
                    background: rating > 0 ? "#e74c3c" : "#2a3a4a",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    fontSize: 13,
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
