import Title from "@/components/Layout/Title";
import React from "react";

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: "20vh" }}>
      <Title emoji="">About</Title>
      <div className="space-y-8">
      <p>
        Ahza was born in <u>Bekasi, Indonesia</u>. a 17 years old web developer
        🧑‍💻. Being exposed to the creative arts and sciences at an early age,
        this has always guided him on the path to learn something new and be
        curious of how things work,{" "}
        <span className="underline">
        a Full Stack developer who loves to create new things
        </span>
      </p>
      <p>
        Here are some of the technologies I have worked with:
      </p>
      <ul className="list-disc gap-y-6 ml-8 flex flex-wrap">
        <li className="w-1/2 md:w-1/3">React</li>
        <li className="w-1/2 md:w-1/3">Next.js</li>
        <li className="w-1/2 md:w-1/3">React Native</li>
        <li className="w-1/2 md:w-1/3">Express</li>
        <li className="w-1/2 md:w-1/3">MongoDB</li>
        <li className="w-1/2 md:w-1/3">PostgreSql</li>
      </ul>
      </div>
    </section>
  );
}
