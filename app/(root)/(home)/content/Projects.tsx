'use client'

import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link2 } from "react-feather";

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = React.useState(3);

  const project = [
    {
      label: "Personal Website",
      image: "personal-website.png",
      tech: "typescript",
      summary:
        "A digital space that showcases a person's best work, blog, backgrounds, etc.",
      tags: ["NextJS"],
      link: "https://github.com/radithyaa/Personal-Website",
    },
    {
      label: "Inventory App",
      image: "Inventory App.png",
      tech: "typescript",
      summary: "Inventory Management App of my school for handling data in real time.",      tags: ["NextJS", "Supabase"],
      link: "https://github.com/radithyaa/Inventory-App",
    },
    {
      label: "Esemka Laundry",
      image: "Esemka Laundry.png",
      tech: "typescript",
      summary: "A multi platform monorepo app that contains frontend, backend, and multiplatform apps in single codebase",
      tags: ["ReactJS", "HonoJS", "Tauri"],
      link: "https://github.com/radithyaa/tauri-monorepo-app"
    },
  ];

  return (
    <section id="projects" style={{ scrollMarginTop: "20vh" }}>
      <Title emoji="">Projects</Title>
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
              <Link2 size={15} /> Preview
            </Link>
          </div>
          <hr className="border-1 border-[#252529] border-dashed my-3" />
          <div className="flex items-center gap-5">
            <ul className="flex gap-2">
              {p.tags.map((t) => {
                return (
            <li
              key={t}
              className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit"
            >
              # {t}
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
              Show More
            </button> : 
            <button
              onClick={() => setVisibleProjects(3)} aria-label="Show less projects"
              className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 text-sm rounded-lg text-zinc-400"
            >
              Show Less
            </button>}
          </div>
        )}
      </div>
    </section>
  );
}
