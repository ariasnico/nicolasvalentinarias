import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolás Valentín Arias",
  description: "Me gusta construir cosas.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nicolás Valentín Arias",
    description: "Me gusta construir cosas.",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
