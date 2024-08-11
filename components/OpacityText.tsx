"use client";
import gsap from "gsap";
import SplitType from "split-type";
import React from "react";

interface OpacityText {
  children: React.ReactNode;
}

const OpacityText: React.FC<OpacityText> = ({ children }) => {
  const { useLayoutEffect, useRef } = React;
  const component = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = SplitType.create(".__opacity-text", { types: "chars" });

      gsap.from(split.chars, {
        opacity: 0.3,
        ease: "back",
        duration: 0.3,
        stagger: 0.1,
      });

      return () => split.revert(); // cleanup
    }, component);

    return () => ctx.revert(); // useLayoutEffect cleanup
  }, []);

  return (
    <div ref={component}>
      <p className="__opacity-text text-[22px] tracking-wide">{children}</p>
    </div>
  );
};

export default OpacityText;
