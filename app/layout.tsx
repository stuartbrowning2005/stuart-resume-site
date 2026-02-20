import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stuart Browning",
  description: "Resume and portfolio of Stuart Browning, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
