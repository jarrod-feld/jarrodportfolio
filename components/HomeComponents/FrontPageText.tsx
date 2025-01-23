"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function FrontPageText() {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "is",
    },
    {
      text: "Jarrod",
      className: "text-red-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Aerospace engineering student skilled in full-stack development with React, Django, and SQLite. Experienced in API integration, unit testing, and performance optimization. Passionate about creating efficient, user-focused solutions and leveraging software to drive innovation 

      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
