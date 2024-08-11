"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  className?: string;
  Icon: React.ReactNode;
  back?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ className, Icon, back }) => {
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

  return (
    <div
      className={twMerge(
        `flex gap-2 items-start self-stretch my-auto w-[46px] cursor-pointer
          `,
        className
      )}
      onClick={back ? handleBackClick : handleRefreshClick}
    >
      <div className="flex flex-col justify-center items-center px-2 bg-white bg-opacity-10 h-[46px] min-h-[46px] rounded-[200px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] w-[46px]">
        {Icon}
      </div>
    </div>
  );
};

export default IconButton;
