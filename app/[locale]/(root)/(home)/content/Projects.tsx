/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link2 } from "react-feather";
import { type Locale } from "@/libs/i18n";

interface ProjectsProps {
  locale: Locale;
  translations: any;
}

export default function Projects({ translations }: ProjectsProps) {
  const [visibleProjects, setVisibleProjects] = React.useState(3);
  const t = translations;

  const project = [
    {
      label: t.projects.items[0].label,
      image: "personal-website.png",
      tech: "typescript",
      summary: t.projects.items[0].summary,
      tags: t.projects.items[0].tags,
      link: "https://github.com/radithyaa/Personal-Website",
    },
    {
      label: t.projects.items[1].label,
      image: "Inventory App.png",
      tech: "typescript",
      summary: t.projects.items[1].summary,
      tags: t.projects.items[1].tags,
      link: "https://github.com/radithyaa/Inventory-App",
    },
    {
      label: t.projects.items[2].label,
      image: "Esemka Laundry.png",
      tech: "typescript",
      summary: t.projects.items[2].summary,
      tags: t.projects.items[2].tags,
      link: "https://github.com/radithyaa/tauri-monorepo-app"
    },
  ];

  return (
    <section id="projects" style={{ scrollMarginTop: "20vh" }}>
      <Title emoji="">{t.projects.title}</Title>
      <div className="grid gap-2">
        {project.slice(0, visibleProjects).map((p, idx) => {
          return (
            <div
              key={idx}
              className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center"
            >
              <div className="p-2">
          <Image
            src={`/assets/project/${p.image}`}
            alt="mockup"
            width={500}
            height={100}
            className="border border-[#202024] rounded-lg"
          />
              </div>
              <div className="p-3 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black">{p.label}</h1>
            <Link
              target="_blank"
              href={p.link}
              className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2"
            >
              <Link2 size={15} /> {t.projects.preview}
            </Link>
          </div>
          <hr className="border-1 border-[#252529] border-dashed my-3" />
          <div className="flex items-center gap-5">
            <ul className="flex gap-2">
              {p.tags.map((tag: "string") => {
                return (
            <li
              key={tag}
              className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit"
            >
              # {tag}
            </li>
                );
              })}
            </ul>
            <div className="bg-zinc-500 rounded-full h-[3px] w-[3px] aspect-square flex-none relative "></div>
            <p className="opacity-50 text-sm">{p.tech}</p>
          </div>
          <hr className="border-1 border-[#252529] border-dashed my-3" />
          <p className="">{p.summary}</p>
              </div>
            </div>
          );
        })}
        {project.length > 3 && (
          <div className="text-center mt-4 -mb-10 ">
            {visibleProjects < project.length ? <button aria-label="Show more projects"
              onClick={() => setVisibleProjects(project.length)}
              className="border border-[#252529] bg-[#18181b] text-sm hover:bg-[#1f1f24] duration-200 px-5 py-2 rounded-lg text-zinc-400"
            >
              {t.projects.showMore}
            </button> : 
            <button
              onClick={() => setVisibleProjects(3)} aria-label="Show less projects"
              className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 text-sm rounded-lg text-zinc-400"
            >
              {t.projects.showLess}
            </button>}
          </div>
        )}
      </div>
    </section>
  );
}