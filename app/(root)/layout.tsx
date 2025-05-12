import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children?: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="px-4 sm:mx-auto min-h-[57.5vh] max-w-3xl my-20">{children}</main>
      <Footer />
    </>
  );
}
