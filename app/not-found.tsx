import Title from "@/components/Layout/Title";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import Link from "next/link";
import { getTranslations, defaultLocale } from "@/libs/i18n";

export default function NotFound() {
  const t = getTranslations(defaultLocale);

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar locale={defaultLocale} translations={t} />
      <div className="px-4 sm:mx-auto max-w-3xl my-20 flex flex-col items-center justify-center">
        <Title emoji="🤔">{t.notFound.title}</Title>
        <h2 className="mb-2 text-center">{t.notFound.message}</h2>
        <Link
          href={"/"}
          className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 text-sm rounded-lg text-zinc-400"
        >
          {t.notFound.backHome}
        </Link>
      </div>
      <Footer locale={defaultLocale} translations={t} />
    </div>
  );
}
