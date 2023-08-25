import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";
import siteConfig from "../config/site";
import Script from 'next/script';

const GTM_ID = 'GTM-WLM9PX8H';

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
    {/* https://www.rodyvansambeek.com/blog/easiest-ga4-integration-nextjs-13-gtm-guide */}
    <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
      <body>
        {children}
        <Analytics />
        {/* In the case where JavaScript is disabled in the user's browser */}
        <noscript
            dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
        />
      </body>
    </html>
  );
}
