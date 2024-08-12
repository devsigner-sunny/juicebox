"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
