"use client";

import { usePathname } from "next/navigation";
import { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@/components/IconButton";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Refresh from "@/components/icons/Refresh";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const pathname = usePathname();
  const hideBackbutton = pathname === "/" ? "invisible" : "visible";
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const stickyHeader = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.addEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky && "bg-brand-black/80"
      } z-10 fixed top-0 flex items-center justify-between w-full gap-10 p-5`}
    >
      <IconButton
        className={hideBackbutton}
        Icon={
          <ArrowLeft className="transition fill-neutral-50 hover:fill-neutral-300" />
        }
        back
      />
      <Link href="/">
        <Image
          loading="lazy"
          src="/logo.svg"
          width={100}
          height={50}
          alt="Logo"
          className="dark:invert object-contain shrink-0 self-stretch my-auto aspect-[4.24] w-[123px]"
        />
      </Link>

      <IconButton
        Icon={
          <Refresh className="transition stroke-neutral-50 hover:stroke-neutral-300" />
        }
      />
    </header>
  );
};

export default Header;
