import { IconProps } from "@/app/interfaces";

const ArrowTop = ({ className, size = 10 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25L9 15.75" stroke="white"/>
    </svg>
  );
};

export default ArrowTop;