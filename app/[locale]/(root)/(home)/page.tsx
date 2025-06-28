import Divider from "@/components/Layout/Divider";
import React from "react";
import Blog from "./content/Blog";
import About from "./content/About";
import Projects from "./content/Projects";
import Home from "./content/Home";
import { getTranslations, type Locale } from "@/libs/i18n";

export default async function Page({ 
  params 
}: { 
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  return (
    <div className="transition-all duration-300">
      <Home locale={locale as Locale} translations={t} />
      <Divider />
      <About locale={locale as Locale} translations={t} />
      <Divider />
      <Projects locale={locale as Locale} translations={t} />
      <Divider />
      <Blog locale={locale as Locale} translations={t} />
    </div>
  );
}