"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SmoothScrolling from "@/components/SmoothScrolling";
import gsap from "gsap";
import { useMediaQuery } from "@/hooks/use-mediaquery";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      gsap.to(".template", { opacity: 0, duration: 0.2 });
      gsap.to(".template", { opacity: 1, duration: 0.5 });
    };
    handleRouteChange();
  }, [pathname]);

  let isPageHeight = useMediaQuery("(min-height: 600px)");

  return (
    <div
      className={`${
        isPageHeight ? "__main-min-screen-height" : "border-red-500"
      }  max-w-[390px] px-5 mx-auto template`}
    >
      <div className="absolute top-0 left-0 -z-[1] w-full h-full pointer-events-none bg-brand-gradient"></div>
      <SmoothScrolling>{children}</SmoothScrolling>
    </div>
  );
}
