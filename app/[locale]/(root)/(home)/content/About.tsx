/* eslint-disable @typescript-eslint/no-explicit-any */

import Title from "@/components/Layout/Title";
import React from "react";

interface AboutProps {
  translations: any;
}

export default function About({ translations }: AboutProps) {
  const t = translations;

  return (
    <section id="about" style={{ scrollMarginTop: "20vh" }}>
      <Title emoji="">{t.about.title}</Title>
      <div className="space-y-8">
      <p>
        {t.about.bio1}
      </p>
      <p>
        {t.about.bio2}
      </p>
      <ul className="list-disc gap-y-6 ml-8 flex flex-wrap">
        {t.about.technologies.map((tech: string, index: number) => (
          <li key={index} className="w-1/2 md:w-1/3">{tech}</li>
        ))}
      </ul>
      </div>
    </section>
  );
}