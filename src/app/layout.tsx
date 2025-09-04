import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:["500","200","400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GameDex: Discover, Track & Download the Ultimate Game App",
  description: "GameDex lets you discover, review, and create lists for your favorite video games. Download the app now on Google Play Store!",
  keywords: [
    "GameDex",
    "video games",
    "game reviews",
    "game lists",
    "track games",
    "discover games",
    "Google Play",
    "download app",
    "gaming app",
    "game tracker"
  ],
  alternates: {
    canonical: "https://game-dex-promo-website.vercel.app/"
  },
  openGraph: {
    title: "GameDex: Discover, Track & Download the Ultimate Game App",
    description: "GameDex lets you discover, review, and create lists for your favorite video games. Download the app now on Google Play Store!",
    url: "https://game-dex-promo-website.vercel.app/",
    siteName: "GameDex",
    locale: "en_US",
    type: "website"
  },
  metadataBase: new URL("https://game-dex-promo-website.vercel.app/"),
  appLinks: {
    android: {
      package: "com.kumargaurav14.GameDex",
      url: "https://play.google.com/store/apps/details?id=com.kumargaurav14.GameDex&pcampaignid=web_share"
    }
  }
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
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
