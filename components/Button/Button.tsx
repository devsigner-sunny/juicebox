import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { sohne } from "@/fonts";
import "./button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  type: "primary" | "default" | "invert" | "ghost";
}

export function Button({
  label = "button",
  type = "default",
  ...props
}: ButtonProps) {
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
        <button
          role="button"
          autoFocus
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
