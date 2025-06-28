import type { Metadata } from "next";
import { Grotesk } from "@/libs/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { isValidLocale, type Locale } from "@/libs/i18n";
import { notFound } from "next/navigation";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahzaradithya.site"),
  title: {
    default: "Ahza Radithya Dwicahyo",
    template: "%s - Ahza Radithya Dwicahyo",
  },
  description:
    "FullStack Developer working on solo projects, currently based in Bekasi, Indonesia.",
  keywords: [
    "ahza",
    "nextjs",
    "Ahza Radithya Dwicahyo",
    "Ahza Radithya Dwicahyo Portofolio",
    "Portofolio Ahza Radithya Dwicahyo",
    "Ahza Radithya",
    "Radithyaa",
  ],
  openGraph: {
    siteName: "ahzaradithya.site",
    title: "Ahza Radithya ",
    description:
      "Hello, I'm a FullStack developer who loves making and exploring something new.",
    images: [
      "https://ahzaradithya.site/assets/project/personal-website.png",
    ],
    locale: "en-ID",
    type: "website",
  }
};

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'id' }
  ]
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  return (
    <html lang="en">
      <body className={`${Grotesk.className} antialiased ` }>
        <LocaleValidator params={params}>
          {children}
        </LocaleValidator>
        <Analytics />
        <SpeedInsights />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e9a956c2-369e-471d-a48e-d2e94e587bff"
        ></script>
      </body>
    </html>
  );
}

async function LocaleValidator({ 
  children, 
  params 
}: { 
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}