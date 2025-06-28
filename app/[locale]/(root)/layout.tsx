import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import { getTranslations, type Locale } from "@/libs/i18n";
import React, { ReactNode } from "react";

export default async function Layout({ 
  children, 
  params 
}: { 
  children?: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <>
      <Navbar locale={locale as Locale} translations={t} />
      <main className="px-4 sm:mx-auto min-h-[57.5vh] max-w-3xl my-20">{children}</main>
      <Footer locale={locale as Locale} translations={t} />
    </>
  );
}