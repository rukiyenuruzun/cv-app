import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rukiye Nur Uzun - CV",
  description: "Computer Engineering Student CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="h-full">{children}</body>
    </html>
  );
}
