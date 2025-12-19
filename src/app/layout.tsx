import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import ClientBody from "./ClientBody";
import { StructuredData, websiteSchema, organizationSchema } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maven Genetics | Premium Cannabis Genetics & Products",
    template: "%s | Maven Genetics"
  },
  description: "Discover Maven Genetics' premium cannabis strains. Expertly cultivated for exceptional potency, flavor, and consistency. Your trusted source for top-tier cannabis genetics.",
  keywords: ["cannabis genetics", "premium strains", "THC seeds", "CBD seeds", "growing cannabis", "cannabis cultivation", "weed seeds", "marijuana genetics"],
  metadataBase: new URL('https://maven-genetics.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Maven Genetics | Premium Cannabis Genetics & Products",
    description: "Discover our curated selection of high-quality cannabis strains, expertly cultivated for potency, flavor, and consistency.",
    url: 'https://maven-genetics.vercel.app',
    siteName: 'Maven Genetics',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maven Genetics - Premium Cannabis Genetics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Maven Genetics | Premium Cannabis Genetics & Products",
    description: "Expertly cultivated cannabis genetics for the discerning grower. Discover our premium strains today.",
    images: ['/images/twitter-card.jpg'],
    creator: '@mavengenetics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={websiteSchema} />
        <StructuredData data={organizationSchema} />
      </head>
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
