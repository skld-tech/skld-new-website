import type React from "react";
import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";
// import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKLD Integrated Services",
  icons: {
    icon: "/skld-icon.png",
    apple: "/skld-icon.png",
  },
  description: "Building Africa's Future, One Solution At A Time",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Zoho Live Chat */}
        <Script id="zoho-init" strategy="beforeInteractive">
          {`window.$zoho=window.$zoho || {}; $zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq6868b829271f820aea1ef4ad796ddc516a5410baca0b8dd21a66704b8e05582ac5a5d20a255a89928dc4a9dd20b9d112"
          strategy="lazyOnload"
        />
      </head>

      <body
        className={`${playfairDisplay.variable} ${dmSerifText.variable} ${lato.variable} font-sans`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
