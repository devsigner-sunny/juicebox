import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { sohne } from "@/fonts";
import "./button.css";

interface ButtonProps {
  label: string;
  href: string;
  className?: string;
  type?: "primary" | "default" | "ghost" | "invert";
}

const Button: FC<ButtonProps> = ({
  label = "button",
  type = "default",
  ...props
}) => {
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
          `overflow-hidden cursor-pointer text-center self-stretch max-w-full bg-violet-300 rounded-2xl min-h-[60px] shadow-[0px_0px_0px_rgba(255,255,255,0.34)]
				`,
          `__btn-${type}`
        )}
      >
        <Link
          href={props.href}
          className={`p-5 inline-block w-full ${sohne.className}`}
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

export default Button;
