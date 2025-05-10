"use client";

import Link from "next/link";
import { Edit3, GitHub, Linkedin, Mail } from "react-feather";

export default function Footer() {

  return (
    <footer className="border-t border-t-[#202024] py-8">
      <div className="px-4 sm:mx-auto max-w-3xl sm:flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahza Radithya, All right reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
        <Link href={"https://www.linkedin.com/in/ahza-radithya-dwicahyo-23a761353/"} target="_blank">
          <Linkedin size={13} />
        </Link>
        <Link href={"https://github.com/radithyaa"} target="_blank">
          <GitHub size={13} />
        </Link>
        <Link href={"mailto:ahzathenation@gmail.com"} target="_blank">
          <Mail size={13} />
        </Link>
        <Link href={"https://medium.com/@ahzathenation"} target="_blank">
          <Edit3 size={13} />
        </Link>
        </div>
      </div>
    </footer>
  );
}
