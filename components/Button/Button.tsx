import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { sohne } from "@/fonts";
import "./button.css";

interface ButtonProps {
  label: string;
	autoFocus: boolean;
  onClick: () => void;
  className?: string;
  type: "primary" | "default" | "invert" | "ghost";
}

export function Button({
  label = "button",
  type = "default",
	autoFocus = true,
  ...props
}: ButtonProps) {
  
  return (
    <div
      className={twMerge(
        `flex flex-col items-center justify-center w-full py-6 text-base leading-[1.35em] tracking-[.02em] 
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
        <button
          role="button"
          autoFocus={autoFocus}
          aria-label={label}
          onClick={props.onClick}
          className={`p-5 inline-block w-full h-full ${sohne.className}`}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
