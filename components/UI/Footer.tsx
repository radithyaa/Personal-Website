"use client";

import Link from "next/link";
import { Edit3, GitHub, Linkedin, Mail } from "react-feather";
import { type Locale } from "@/libs/i18n";

interface FooterProps {
  locale: Locale;
  translations: any;
}

export default function Footer({ locale, translations }: FooterProps) {
  const t = translations;

  return (
    <footer className="border-t border-t-[#202024] py-4 sm:py-8">
      <div className="px-4 sm:mx-auto max-w-3xl flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahza Radithya, {t.footer.copyright}
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
        <Link
          href={"https://www.linkedin.com/in/ahza-radithya-dwicahyo-23a761353/"}
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={13} />
        </Link>
        <Link
          href={"https://github.com/radithyaa"}
          target="_blank"
          aria-label="GitHub Profile"
        >
          <GitHub size={13} />
        </Link>
        <Link
          href={"mailto:ahzathenation@gmail.com"}
          target="_blank"
          aria-label="Send Email"
        >
          <Mail size={13} />
        </Link>
        <Link
          href={"https://medium.com/@ahzathenation"}
          target="_blank"
          aria-label="Medium Blog"
        >
          <Edit3 size={13} />
        </Link>
        </div>
      </div>
    </footer>
  );
}