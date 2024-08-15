"use client";
import gsap from "gsap";
import SplitType from "split-type";
import React from "react";

interface OpacityTextProps {
  children: React.ReactNode;
  className?: string;
}

export function OpacityText({ children, className }: OpacityTextProps) {
  const { useLayoutEffect, useRef } = React;
  const component = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = SplitType.create(".__opacity-text", { types: "words" });

      gsap.from(split.words, {
        opacity: 0.5,
        ease: "back",
        duration: 0.6,
        stagger: 0.5,
      });

      return () => split.revert(); // cleanup
    }, component);

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div ref={component}>
      <p className={`__opacity-text text-[22px] tracking-[0.01em ${className}`}>
        {children}
      </p>
    </div>
  );
}
