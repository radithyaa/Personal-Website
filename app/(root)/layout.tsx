import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import React, { ReactNode } from "react";
import { getTranslations, defaultLocale } from "@/libs/i18n";

export default function layout({ children }: { children?: ReactNode }) {
  const t = getTranslations(defaultLocale);

  return (
    <>
      <Navbar locale={defaultLocale} translations={t} />
      <main className="px-4 sm:mx-auto min-h-[57.5vh] max-w-3xl my-20">
        {children}
      </main>
      <Footer translations={t} locale={defaultLocale} />
    </>
  );
}
