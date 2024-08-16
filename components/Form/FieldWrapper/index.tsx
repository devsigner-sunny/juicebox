import React from "react";

interface FieldWrapperProps {
  children: React.ReactNode;
}

export function FieldWrapper({ children }: FieldWrapperProps) {
  return <div className="field relative mt-auto py-6">{children}</div>;
}
