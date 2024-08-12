"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { FormProvider } from "@/components/form/FormContext";
import SmoothScrolling from "@/components/SmoothScrolling";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      gsap.to(".template", { opacity: 0, duration: 0.2 });
      gsap.to(".template", { opacity: 1, duration: 0.5 });
    };
    handleRouteChange();
  }, [pathname, searchParams]);

  return (
    <div className="min-h-screen max-w-md mx-auto template">
      <div className="absolute top-0 left-0 -z-[1] w-full h-full pointer-events-none bg-brand-gradient"></div>
      <div className="__main-min-screen-height">
        <FormProvider>
          <SmoothScrolling>{children}</SmoothScrolling>
        </FormProvider>
      </div>
    </div>
  );
}
