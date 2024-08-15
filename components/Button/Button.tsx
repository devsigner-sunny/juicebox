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
    <div className={twMerge(`__btn __btn-${type}`, props.className)}>
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
  );
}
