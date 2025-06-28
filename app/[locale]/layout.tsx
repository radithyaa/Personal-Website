import type { Metadata } from "next";
import { isValidLocale, type Locale } from "@/libs/i18n";
import { notFound } from "next/navigation";

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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}