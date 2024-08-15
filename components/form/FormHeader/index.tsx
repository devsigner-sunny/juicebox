import React from "react";

interface FormHeaderProps {
  children: React.ReactNode;
}

export function FormHeader({ children }: FormHeaderProps) {
  return (
    <p className="text-[19px] text-center tracking-[0.01em]">{children}</p>
  );
}
