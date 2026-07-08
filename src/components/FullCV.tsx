"use client";

import { cvData } from "@/data/cvData";

export default function FullCV() {
  const d = cvData;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 24,
        color: "#222",
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        lineHeight: 1.5,
        maxHeight: "70vh",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 16, textAlign: "center" }}>
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
          {d.profile.name}
        </h1>
        <p style={{ color: "#666", margin: "2px 0" }}>{d.profile.title}</p>
        <p style={{ color: "#888", fontSize: 11 }}>
          {d.profile.university} · {d.profile.location}
        </p>
        <p style={{ color: "#888", fontSize: 11 }}>{d.profile.email}</p>
        <p style={{ color: "#888", fontSize: 11 }}>{d.profile.language}</p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "12px 0" }} />

      {/* Eğitim */}
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: "#e74c3c", marginBottom: 4 }}>
          Eğitim
        </h2>
        <p style={{ fontWeight: 600 }}>{d.education.school}</p>
        <p>{d.education.department}</p>
        <p style={{ color: "#666", fontSize: 11 }}>{d.education.period}</p>
        <p style={{ color: "#666", fontSize: 11 }}>{d.education.detail}</p>
        <p style={{ marginTop: 4 }}>
          <strong>Dersler:</strong> {d.education.courses.join(", ")}
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "12px 0" }} />

      {/* Teknik Yetkinlikler */}
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: "#3498db", marginBottom: 4 }}>
          Teknik Yetkinlikler
        </h2>
        <p>
          <strong>Programlama Dilleri:</strong>{" "}
          {["Java", "C", "Dart", "Python"].join(" · ")}
        </p>
        <p>
          <strong>Frameworkler / Kütüphaneler:</strong> Flutter · Django
        </p>
        <p>
          <strong>Araçlar / Platformlar:</strong>{" "}
          {["Git", "GitHub", "MySQL", "Eclipse", "VS Code", "Android Studio"].join(" · ")}
        </p>
        <p>
          <strong>Diller:</strong> Türkçe (Anadil) · İngilizce (Akıcı)
        </p>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "12px 0" }} />

      {/* Projeler */}
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: "#2ecc71", marginBottom: 4 }}>
          Projeler
        </h2>
        {d.projects.map((p, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <p style={{ fontWeight: 600 }}>{p.title}</p>
            <p style={{ color: "#666", fontSize: 11 }}>{p.tech}</p>
            <p style={{ fontSize: 11 }}>{p.description}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #ddd", margin: "12px 0" }} />

      {/* Gönüllülük */}
      <div style={{ marginBottom: 0 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, color: "#9b59b6", marginBottom: 4 }}>
          Gönüllülük
        </h2>
        <p style={{ fontWeight: 600 }}>{d.volunteering.organization}</p>
        <p>{d.volunteering.project}</p>
        <p style={{ color: "#666", fontSize: 11 }}>{d.volunteering.role}</p>
        <p style={{ fontSize: 11 }}>{d.volunteering.description}</p>
      </div>
    </div>
  );
}
