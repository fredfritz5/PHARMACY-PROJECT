import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthPlus | Premium Digital Pharmacy",
  description: "Secure, real-time, user-centric pharmacy platform for ordering prescriptions, health wellness products, and OTC medicine.",
  keywords: ["pharmacy", "health", "prescriptions", "wellness", "medicine"],
  authors: [{ name: "HealthPlus Pharmacy" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
