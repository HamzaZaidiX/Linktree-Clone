"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2 flex-row">
        <div className="flex justify-center flex-col ml-[10vw] mt-[10vw] gap-1 ">
          <p className="text-[#d2e823] font-bold text-5xl tracking-wide">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-[#d2e823] text-lg my-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-2 input">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="px-2 py-2 rounded-md focus:outline-green-800"
              type="text"
              placeholder="Enter your Handle"
            />
            <button
              onClick={() => createTree()}
              className="bg-[#e9c0e9] rounded-full px-4 py-4 font-semibold"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-[10vw]">
          <img src="/home.png" alt="homepage image" />
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <img src="/section.png" alt="section image" />
        </div>
        <div className="flex justify-center flex-col mr-[10vw] gap-3">
          <p className="text-[#502274] font-bold text-5xl">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-[#502274] text-lg">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <Link href="/"></Link>
          <button className="p-4 font-bold text-white bg-[#502274] rounded-full signup hover:bg-[#502274] z-1 hover:scale-105">
            {" "}
            Get Started for Free
          </button>
        </div>
      </section>
    </main>
  );
}
