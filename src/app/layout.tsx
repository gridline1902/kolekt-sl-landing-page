import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kolekt by Monime",
  description: "Kolekt is powered by Monime Limited, a company registered in Sierra Leone with registered company number SL140722MONIM14909 and its registered office at 5 Hillside Bypass Road, Freetown, Sierra Leone. Monime Limited is authorised by the Bank of Sierra Leone under the Sandbox program for the provision of payment services. All trademarks and brand names belong to their respective owners. Use of these trademarks and brand names do not represent endorsement by or association with our payment services.",
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
