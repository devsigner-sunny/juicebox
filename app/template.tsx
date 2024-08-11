"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      gsap.to(".template", { opacity: 0, duration: 0.2 });
      gsap.to(".template", { opacity: 1, duration: 0.6 });
    };
    handleRouteChange();
  }, [pathname, searchParams]);

  return <div className="h-full max-w-md mx-auto template">{children}</div>;
}
