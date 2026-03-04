"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  fetch("/api/track", { method: "POST" });
}, []);
  return (
    // min-h-screen ensures the background covers the whole page
    <div className="maincontainer w-full min-h-screen flex justify-center items-center pt-10 bg-[#0a0a0a] text-slate-200">

      {/* Linkbox with a subtle glassmorphism effect */}
      <div className="linkbox border border-slate-800 bg-slate-900/50 backdrop-blur-sm rounded-3xl w-[90vw] md:w-[60vw] flex flex-col items-center gap-8 p-8 md:p-12 shadow-2xl">

        <h1 className="text-4xl md:text-6xl font-black text-center bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent">
          Shorten Your Links, <br /> Share Smarter
        </h1>

        <p className="text-slate-400 text-center max-w-lg leading-relaxed text-lg">
          Turn long, messy URLs into clean, easy-to-share links in seconds.
          Perfect for social media and professional use.
        </p>

        <div className="buttons flex flex-wrap justify-center gap-4 mt-4">
          {/* Primary Button */}
          <Link href="/login">

            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl px-8 py-3 transition-all duration-200 shadow-lg shadow-indigo-500/20 active:scale-95">
              Continue with login
            </button>
          </Link>

          <Link href="/shorturl">
            <button className="border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl px-8 py-3 transition-all duration-200 active:scale-95">
              Continue without login
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}