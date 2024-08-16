"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SmoothScrolling from "@/components/SmoothScrolling";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      gsap.to(".template", { opacity: 0, duration: 0.2 });
      gsap.to(".template", { opacity: 1, duration: 0.5 });
    };
    handleRouteChange();
  }, [pathname]);

  return (
    <div className="max-w-[390px] mx-auto template">
      <div className="absolute top-0 left-0 -z-[1] w-full h-full pointer-events-none bg-brand-gradient"></div>
      <SmoothScrolling>{children}</SmoothScrolling>
    </div>
  );
}
