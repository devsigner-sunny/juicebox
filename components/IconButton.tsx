"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  className?: string;
  Icon: React.ReactNode;
  submit?: boolean;
  back?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  Icon,
  submit,
  back,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackClick = () => {
    console.log("back");
    router.back();
  };

  const handleRefreshClick = () => {
    console.log("refresh");
    router.refresh();
  };

  function getOnClick() {
    if (!submit && back) {
      return handleBackClick;
    }
    if (!submit) {
      return handleRefreshClick;
    }
    return undefined;
  }

  return (
    <button
      className={twMerge(
        `flex flex-col justify-center items-center px-2  cursor-pointer rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.05)]  
          `,
        submit
          ? "w-[31px] h-[31px] bg-white/5"
          : "w-[46px] h-[46px] bg-white/10",
        className
      )}
      onClick={getOnClick()}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
