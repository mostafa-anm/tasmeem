import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import siteConfig from "../config/site";
import Script from "next/script";

let title = siteConfig.title;
let description = siteConfig.description;
let ogimage = `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`;
let siteName = siteConfig.siteName;

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    siteName,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    locale: "ar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VD2QLWWE60" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-VD2QLWWE60');
        `}
      </Script>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
