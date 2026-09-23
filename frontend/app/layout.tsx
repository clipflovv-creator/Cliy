import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cliy.me - Get ready to build with us",
  description:
    "cliy.me is an independent software development platform. We engineer proprietary product systems and solve complex architectural bottlenecks. Join our early access.",
  metadataBase: new URL("https://cliy.me"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "cliy.me - Get ready to build with us",
    description: "Independent software development platform and product lab.",
    url: "https://cliy.me",
    siteName: "cliy.me",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}
    >
      <head>
        <link
          rel="preload"
          href="/money-rain.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/money-poster.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-[#18181B]">
        {children}
      </body>
    </html>
  );
}
