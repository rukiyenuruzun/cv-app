export interface Project {
  title: string;
  tech: string;
  description: string;
}

export const cvData = {
  profile: {
    name: "Rukiye Nur Uzun",
    title: "Computer Engineering Student",
    university: "Abdullah Gül Üniversitesi",
    location: "Ankara / Kayseri (Esnek)",
    email: "rukiyenruzun@gmail.com",
    language: "%100 İngilizce",
  },
  education: {
    school: "Abdullah Gül Üniversitesi",
    department: "Bilgisayar Mühendisliği",
    period: "Eylül 2023 - Günümüz",
    detail: "%100 İngilizce eğitim",
    courses: ["Veri Yapıları", "Algoritmalar", "Nesne Yönelimli Programlama"],
  },
  skills: {
    languages: ["Java", "C", "Dart", "Python"],
    frameworks: ["Flutter", "Django"],
    tools: ["Git", "GitHub", "MySQL", "Eclipse", "VS Code", "Android Studio"],
    spoken: ["Türkçe (Anadil)", "İngilizce (Akıcı)"],
  },
  projects: [
    {
      title: "SmartBike",
      tech: "Django · Python · MySQL",
      description:
        "Şehir içi ulaşım için geliştirilmiş akıllı bisiklet kiralama web sitesi. Bisiklet kiralama, öneriler, konum takibi ve daha fazlası. Arkasında MySQL veritabanı.",
    },
    {
      title: "Mobil Kelime Oyunu",
      tech: "Flutter · Dart",
      description:
        "Flutter ile geliştirilmiş kelime bulmaca oyunu. Uzun bir kelimeden anlamlı küçük kelimeler türetme, shuffle, puan hesaplama ve responsive arayüz.",
    },
    {
      title: "Kütüphane Yönetim Sistemi",
      tech: "Java (OOP)",
      description:
        "Masaüstü uygulaması. Kitap takibi, kullanıcı doğrulama ve ödünç işlemleri. Nesne yönelimli programlama prensipleriyle geliştirildi.",
    },
  ],
  volunteering: {
    organization: "TOG (Toplum Gönüllüleri) Vakfı",
    project: "KAPAK KAPAK Umuda Yolculuk",
    role: "Okul İçi Toplama Sorumlusu",
    description:
      "Fiziksel engelli bireyler için tekerlekli sandalye finansmanı sağlamak amacıyla yürütülen projede okul içi bağış toplama koordinasyonu.",
  },
};

export const sectionOrder = [
  { id: "profile", label: "Özet Bilgiler" },
  { id: "education", label: "Eğitim" },
  { id: "skills", label: "Teknik Yetkinlikler" },
  { id: "projects", label: "Projeler" },
  { id: "volunteering", label: "Gönüllülük" },
] as const;

export const bubbleLabels = [
  "CV ▶",
  "CV'nin Devamı İçin Tıkla ▶▶",
  "Devam Et ▶▶",
  "Hadi Bir Tane Daha ▶▶",
  "Son Bölüm ▶▶",
  "Tüm CV'yi Görmek İçin Tıkla",
];
