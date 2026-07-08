"use client";

import { useState, useCallback } from "react";
import EscapeBubble from "@/components/EscapeBubble";
import AdPopup from "@/components/AdPopup";
import ProgressBar from "@/components/ProgressBar";
import FinalModal from "@/components/FinalModal";
import { cvData, sectionOrder, bubbleLabels } from "@/data/cvData";

export default function Home() {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [popups, setPopups] = useState<
    { id: string; x: number; y: number }[]
  >([]);
  const [showFinal, setShowFinal] = useState(false);

  const isComplete = unlockedIndex === sectionOrder.length;

  const handleCatch = useCallback(
    (x: number, y: number) => {
      if (isComplete) {
        setShowFinal(true);
        return;
      }
      const section = sectionOrder[unlockedIndex];
      setPopups((prev) => [...prev, { id: section.id, x, y }]);
      setUnlockedIndex((prev) => prev + 1);
    },
    [unlockedIndex, isComplete]
  );

  const handleCloseFinal = useCallback(() => {
    setShowFinal(false);
    setUnlockedIndex(0);
    setPopups([]);
  }, []);

  const currentLabel = isComplete
    ? bubbleLabels[bubbleLabels.length - 1]
    : bubbleLabels[unlockedIndex];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#14181c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {popups.length > 0 && (
        <ProgressBar current={popups.length} total={sectionOrder.length} />
      )}

      {popups.map((p, idx) => {
        const section = sectionOrder.find((s) => s.id === p.id)!;
        const isSticker = p.id === "education" || p.id === "volunteering";
        const isPulse = p.id === "volunteering";

        const zBase = 1000 + idx;

        let leftOffset = p.x;
        let topOffset = p.y;

        if (idx > 0) {
          const prev = popups[idx - 1];
          leftOffset = prev.x + (idx % 2 === 0 ? 30 : -30);
          topOffset = prev.y + 80;
        }

        const clampedLeft = Math.max(40, Math.min(leftOffset, window.innerWidth - 560));
        const clampedTop = Math.max(40, Math.min(topOffset, window.innerHeight - 300));

        return (
          <AdPopup
            key={`${p.id}-${idx}`}
            sticker={isSticker}
            pulse={isPulse}
            leftImage={
              p.id === "profile" ? "/images/profile.jpg" : undefined
            }
            rightImage={
              p.id === "education" ? "/images/campus.jpg" : undefined
            }
            zIndex={zBase}
            left={clampedLeft}
            top={clampedTop}
          >
            {p.id === "profile" && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e74c3c", margin: "0 0 8px 0" }}>
                  {section.label}
                </h3>
                <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>
                  {cvData.profile.name}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.profile.title}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.profile.university}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.profile.location}
                </p>
                <p style={{ fontSize: 12, color: "#3498db", margin: "3px 0" }}>
                  {cvData.profile.email}
                </p>
                <p style={{ fontSize: 12, color: "#888", margin: "3px 0" }}>
                  {cvData.profile.language}
                </p>
              </div>
            )}

            {p.id === "education" && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#2ecc71", margin: "0 0 8px 0" }}>
                  {section.label}
                </h3>
                <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>
                  {cvData.education.school}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.education.department}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.education.period}
                </p>
                <p style={{ fontSize: 12, color: "#888", margin: "3px 0" }}>
                  {cvData.education.detail}
                </p>
                <p style={{ fontSize: 12, marginTop: 6 }}>
                  <strong>Dersler:</strong>{" "}
                  {cvData.education.courses.join(", ")}
                </p>
              </div>
            )}

            {p.id === "skills" && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#3498db", margin: "0 0 8px 0" }}>
                  {section.label}
                </h3>

                <p style={{ fontSize: 12, fontWeight: 600, color: "#e74c3c", margin: "0 0 4px 0" }}>
                  Programlama Dilleri
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {cvData.skills.languages.map((s, i) => (
                    <SkillWord key={s} text={s} index={i} />
                  ))}
                </div>

                <p style={{ fontSize: 12, fontWeight: 600, color: "#e74c3c", margin: "0 0 4px 0" }}>
                  Frameworkler / Kütüphaneler
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {cvData.skills.frameworks.map((s, i) => (
                    <SkillWord key={s} text={s} index={10 + i} />
                  ))}
                </div>

                <p style={{ fontSize: 12, fontWeight: 600, color: "#e74c3c", margin: "0 0 4px 0" }}>
                  Araçlar / Platformlar
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {cvData.skills.tools.map((s, i) => (
                    <SkillWord key={s} text={s} index={20 + i} />
                  ))}
                </div>

                <p style={{ fontSize: 12, fontWeight: 600, color: "#e74c3c", margin: "0 0 4px 0" }}>
                  Diller
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {cvData.skills.spoken.map((s, i) => (
                    <SkillWord key={s} text={s} index={30 + i} />
                  ))}
                </div>

                <p style={{ fontSize: 10, color: "#999", marginTop: 6, fontStyle: "italic" }}>
                  yetmedi mi? bir tane daha var...
                </p>
              </div>
            )}

            {p.id === "projects" && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f39c12", margin: "0 0 8px 0" }}>
                  {section.label}
                </h3>
                {cvData.projects.map((proj, pi) => (
                  <div
                    key={pi}
                    style={{
                      marginBottom: 10,
                      paddingBottom: 8,
                      borderBottom:
                        pi < cvData.projects.length - 1
                          ? "1px solid #eee"
                          : "none",
                    }}
                  >
                    <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                      {proj.title}
                    </p>
                    <p style={{ fontSize: 12, color: "#888", margin: "3px 0" }}>
                      {proj.tech}
                    </p>
                    <p style={{ fontSize: 12, color: "#555", margin: 0 }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {p.id === "volunteering" && (
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#9b59b6", margin: "0 0 8px 0" }}>
                  {section.label}
                </h3>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                  {cvData.volunteering.organization}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: "6px 0" }}>
                  {cvData.volunteering.project}
                </p>
                <p style={{ fontSize: 13, color: "#555", margin: "3px 0" }}>
                  {cvData.volunteering.role}
                </p>
                <p style={{ fontSize: 12, color: "#555", margin: "3px 0" }}>
                  {cvData.volunteering.description}
                </p>
                <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
                  <img
                    src="/images/volunteering.jpg"
                    alt=""
                    style={{
                      width: 110,
                      height: 110,
                      objectFit: "cover",
                      borderRadius: 8,
                      border: "3px solid white",
                      boxShadow: "0 0 0 2px #ccc",
                      transform: "rotate(2deg)",
                    }}
                  />
                </div>
              </div>
            )}
          </AdPopup>
        );
      })}

      <EscapeBubble
        label={currentLabel}
        onCatch={handleCatch}
        disabled={showFinal}
      />

      {showFinal && <FinalModal onClose={handleCloseFinal} />}
    </div>
  );
}

function SkillWord({ text, index }: { text: string; index: number }) {
  const delay = index * 60;
  return (
    <span
      className="skill-pop"
      style={{
        animationDelay: `${delay}ms`,
        display: "inline-block",
        background: "#3498db",
        color: "#fff",
        padding: "3px 10px",
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {text}
    </span>
  );
}
