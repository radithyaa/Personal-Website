import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import React, { ReactNode } from "react";
import { locales } from "@/libs/i18n";
import { translations } from "@/libs/i18n/translations";

export default function layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar locale={locales[0]} translations={translations}/>
      <main className="px-4 sm:mx-auto min-h-[57.5vh] max-w-3xl my-20">{children}</main>
      <Footer translations={translations} locale={locales[0]}/>
    </>
  );
}
