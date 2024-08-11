"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import "./hexagon.css";

interface HexagonProps {
  width?: number;
  height?: number;
  className?: string;
}

const Hexagon: React.FC<HexagonProps> = ({ width, height, className }) => {
  return (
    <div
      className="hexagon-mask max-h-[290px] max-w-[390px] mx-auto
		[mask-image:url('../public/hexagon.svg')]"
    >
      <div
        className={twMerge(
          `
          `,
          className
        )}
      >
        <Image
          loading="lazy"
          src="/glassmorphism.png"
          width={400}
          height={400}
          alt="background symb dol"
        />
      </div>
    </div>
  );
};

export default Hexagon;
