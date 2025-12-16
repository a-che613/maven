import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maven Genetics",
  description: "Premium cannabis genetics and products. Discover our curated selection of high-quality strains, expertly cultivated for potency, flavor, and consistency. Your trusted source for premium cannabis genetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientBody>
          <Navigation />
          {children}
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
