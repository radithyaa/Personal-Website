import Divider from "@/components/Layout/Divider";
import React from "react";
import Blog from "./content/Blog";
import About from "./content/About";
import Projects from "./content/Projects";
import Home from "./content/Home";

export default function page() {
  return (
    <div className="transition-all duration-300">
      <Home/>
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Blog />
    </div>
  );
}
