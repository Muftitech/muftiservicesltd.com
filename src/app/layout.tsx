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
  title: "Mufti Services Limited | Technology • Innovation • Skills Development",
  description:
    "Mufti Services Limited provides technology, digital transformation, ICT consulting, software development, fintech, digital skills training, and innovative business solutions in Nigeria.",
  keywords: [
    "Mufti Services Limited",
    "Technology Solutions Nigeria",
    "Digital Transformation Nigeria",
    "ICT Consulting Nigeria",
    "Software Development Nigeria",
    "Fintech Nigeria",
    "ICT Training Nigeria",
    "Digital Skills Training",
    "Web Development Nigeria",
  ],
  openGraph: {
    title: "Mufti Services Limited | Technology • Innovation • Skills Development",
    description:
      "Technology, digital transformation, ICT consulting, software development, fintech, and skills development solutions in Nigeria.",
    type: "website",
    siteName: "Mufti Services Limited",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
