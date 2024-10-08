import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { sohne } from "@/fonts";
import "./button.css";

interface LinkButtonProps {
  label: string;
  href: string;
  className?: string;
  type: "primary" | "default" | "invert";
}

export function LinkButton({
  label = "button",
  type = "default",
  ...props
}: LinkButtonProps) {
  return (
    <div
      className={twMerge(
        `flex flex-col items-center justify-center w-full py-6 text-base leading-none tracking-wide 
			`,
        props.className
      )}
    >
      <div
        className={twMerge(
          `__btn
				`,
          `__btn-${type}`
        )}
      >
        <Link
          autoFocus
          aria-labelledby={label}
          href={props.href}
          className={`p-5 inline-block w-full h-full ${sohne.className}`}
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
