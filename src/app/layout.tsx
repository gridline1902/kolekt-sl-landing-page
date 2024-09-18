import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], style: "normal" });

export const metadata: Metadata = {
  title: "Kolekt by Monime",
  description: "A simple way to accept payments at scale, with ZERO costs. Delight customers by allowing frontline staff to confirm payments via WhatsApp, instantly.",
  icons: {
    icon: [
      { url: "/Favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/Favicon-192x192.png", sizes: "192x192", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
