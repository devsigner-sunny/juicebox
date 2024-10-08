"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { Hexagon } from "@/components/Hexagon";
import { LinkButton } from "@/components/Button/LinkButton";
import { modelAi } from "@/models";
import { sohne } from "@/fonts";

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    gsap.to(".start .__btn-primary", {
      backgroundColor: "#c4b5fd",
      delay: 0.5,
      duration: 0.5,
      ease: "back",
    });
  });

  return (
    <div className="min-h-viewHeight flex flex-col">
      <div className="relative py-6 ai-talks-wrapper">
        <Hexagon bg size="big" />
        <div className="absolute top-0 h-full py-6 translate-x-[-50%] w-full max-w-[390px] mx-auto ai-talks left-1/2">
          {modelAi.map(({ id, title, className }) => (
            <span
              key={id}
              className={`text-xs absolute block ${sohne.className} ${className}`}
            >
              {title}
            </span>
          ))}
        </div>
      </div>

      <h1 className="text-[28px] text-center py-4 leading-[1.2em] traking-[0.01em]">
        Compare your thoughts on{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(70deg,#FABBFF_0%,#B179FF_75%,#6DDDFF_96%)]">
          technology
        </span>{" "}
        with current industry opinions.
      </h1>

      <LinkButton
        label="Get a reality check"
        href="/tutorials"
        type="primary"
        className="start mt-auto"
      />
    </div>
  );
}
