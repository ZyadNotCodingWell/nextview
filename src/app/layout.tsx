import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const inter = Orbitron({ subsets: ["latin"], weight: ["400","700"] });

export const metadata: Metadata = {
  title: "Branding and AI integration",
  description: "NextView official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-base flex flex-col align-center`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
