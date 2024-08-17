import { ReactNode } from "react";

interface TextProps {
  className?: string;
  children: ReactNode;
}

const Text = ({ children, className }: TextProps) => {
  return (
    <>
      <p
        className={`text-slate-600 py-1 text-justify text-base md:text-lg mt-3 ${className}`}
      >
        {children}
      </p>
    </>
  );
};

export default Text;
