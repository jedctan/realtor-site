import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zilla-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carmela Flores-Tan | Realtor",
  description: "Carmela Flores-Tan is your trusted real estate partner. Find your dream home or sell your property with confidence in the local market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.variable} font-serif antialiased`} style={{ fontFamily: "'Zilla Slab', 'Georgia', 'Times New Roman', 'Times', serif" }}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
