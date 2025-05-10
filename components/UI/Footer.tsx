"use client";

import Link from "next/link";
import { GitHub, Instagram, Linkedin, Mail, Twitter } from "react-feather";

export default function Footer() {
  // const [time, setTime] = useState<string>("");

  // const formatTime = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  // const updateTime = () => {
  //   const today = new Date();
  //   const hh = today.getHours();
  //   const mm = today.getMinutes();

  //   const formattedTime = `${formatTime(hh)}:${formatTime(mm)}`;
  //   setTime(formattedTime);
  // };

  // useEffect(() => {
  //   updateTime();
  //   const intervalId = setInterval(updateTime, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <footer className="border-t border-t-[#202024] py-8">
      <div className="px-4 sm:mx-auto max-w-3xl sm:flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Ahza Radithya Dwicahyo, All right reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
        <Link href={"https://instagram.com/byanrkh"} target="_blank">
          <Linkedin size={13} />
        </Link>
        <Link href={"https://instagram.com/byanrkh"} target="_blank">
          <GitHub size={13} />
        </Link>
        <Link href={"https://instagram.com/byanrkh"} target="_blank">
          <Mail size={13} />
        </Link>
        <Link href={"https://instagram.com/byanrkh"} target="_blank">
          <Instagram size={13} />
        </Link>
        </div>
      </div>
    </footer>
  );
}
