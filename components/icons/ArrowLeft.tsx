import { IconProps } from "@/app/interfaces";

const ArrowLeft = ({ className }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9.70711 16.7071C9.31659 17.0976 8.68342 17.0976 8.2929 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.2929 3.29289C8.68342 2.90237 9.31659 2.90237 9.70712 3.29289C10.0976 3.68342 10.0976 4.31658 9.70712 4.70711L5.41422 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H5.41422L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z" />
    </svg>
  );
};

export default ArrowLeft;
