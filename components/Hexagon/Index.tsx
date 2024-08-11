"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import "./hexagon.css";

interface HexagonProps {
  size: "small" | "medium" | "big";
  className?: string;
  bg?: boolean;
}

const Hexagon: React.FC<HexagonProps> = ({ className, size, bg = false }) => {
  function getSize() {
    let sizeClass = "";
    switch (size) {
      case "small":
        return (sizeClass = "max-w-[29px] max-h-[31px]");
      case "medium":
        return (sizeClass = "max-w-[146px] max-h-[155px]");
      case "big":
        return (sizeClass = "max-w-[290px] max-h-[390px]");
      default:
        return null;
    }
  }

  return (
    <>
      {bg ? (
        <div
          className={twMerge(
            `hexagon-mask mx-auto [mask-image:url('../public/hexagon.svg')]
          `,
            className,
            getSize()
          )}
        >
          <Image
            loading="lazy"
            src="/glassmorphism.png"
            width={350}
            height={350}
            alt="background symbdol"
            className="w-full rotate-180"
          />
        </div>
      ) : (
        <div
          className={twMerge(
            `grid place-items-center px-12 pb-12 pt-[28px]
          `,
            className,
            getSize()
          )}
        >
          <Image
            loading="lazy"
            src="/hexagon.svg"
            width={146}
            height={146}
            alt="background symbdol"
          />
        </div>
      )}
    </>
  );
};

export default Hexagon;
