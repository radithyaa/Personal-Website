/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/libs/cn";
import { Drawer } from "vaul";
import LanguageSwitcher from "./LanguageSwitcher";
import { type Locale } from "@/libs/i18n";

interface NavbarProps {
  locale: Locale;
  translations: any;
}

export default function Navbar({ locale, translations }: NavbarProps) {
  const t = translations;

  const Links = [
    {
      label: t.nav.home,
      path: `/${locale}`,
    },
    {
      label: t.nav.about,
      path: `/${locale}#about`,
    },
    {
      label: t.nav.projects,
      path: `/${locale}#projects`,
    },
    {
      label: t.nav.blogs,
      path: `/${locale}#blogs`,
    },
  ];

  return (
    <nav aria-label="Primary Navigation" className={cn("border-b border-b-[#202024] py-4 sm:py-6 sticky top-0 z-50 bg-[#141417]")}>
      <div className="mx-8 md:px-4 sm:mx-auto max-w-3xl flex justify-between items-center">
        <Link href={`/${locale}`}>
          <Image
            src={"/assets/profile.png"}
            alt="logo"
            width={35}
            height={35}
            className="saturate-[0.3] rounded-full"
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-5">
            {Links.map((nav, idx) => {
              return (
                <li
                  className='text-sm capitalize hover:underline hover:underline-offset-2 hover:text-white'
                  key={idx}
                >
                  <Link aria-label={`Navigate to ${nav.label}`} href={nav.path}>{nav.label}</Link>
                </li>
              );
            })}
          </ul>
          
          <LanguageSwitcher currentLocale={locale} />
          
          <div className="block sm:hidden">
            <Drawer.Root>
              <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 text-sm shadow-sm transition-all bg-[#202024] hover:bg-[#1A1A19] text-white">
                {t.nav.menu}
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="backdrop-blur-md flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline outline-[#202024]">
                  <div className="p-4 rounded-t-[10px] flex-1">
                    <div
                      aria-hidden
                      className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#202024] mb-8"
                    />
                    <div className="max-w-md mx-auto">
                      <Drawer.Title className="hidden"></Drawer.Title>
                      <div className="grid grid-cols-1 gap-2">
                        {Links.map((nav, idx) => {
                          return (
                            <Link
                              key={idx}
                              href={nav.path}
                              className={cn(
                                "border border-[#202024] rounded-lg py-3 text-center capitalize hover:bg-[#202024] "
                              )}
                            >
                              {nav.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </div>
    </nav>
  );
}