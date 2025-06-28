import Title from "@/components/Layout/Title";
import { getTranslations, defaultLocale } from "@/libs/i18n";
import React from "react";

export default function About() {
  const t = getTranslations(defaultLocale);

  return (
    <section id="about" style={{ scrollMarginTop: "20vh" }}>
      <Title emoji="">{t.about.title}</Title>
      <div className="space-y-8">
        <p>{t.about.bio1}</p>
        <p>{t.about.bio2}</p>
        <ul className="list-disc gap-y-6 ml-8 flex flex-wrap">
          {t.about.technologies.map((tech: string, index: number) => (
            <li key={index} className="w-1/2 md:w-1/3">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
