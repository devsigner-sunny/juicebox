import { twMerge } from "tailwind-merge";
import { IconProps } from "@/app/interfaces";

const Refresh = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33398 3.33301V7.49967H3.81858M3.81858 7.49967C4.80756 5.05648 7.20284 3.33301 10.0007 3.33301C13.4003 3.33301 16.2057 5.87775 16.6157 9.16634M3.81858 7.49967H7.50065M16.6673 16.6663V12.4997H16.1827M16.1827 12.4997C15.1937 14.9429 12.7985 16.6663 10.0007 16.6663C6.60097 16.6663 3.79564 14.1216 3.38556 10.833M16.1827 12.4997H12.5007"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Refresh;
