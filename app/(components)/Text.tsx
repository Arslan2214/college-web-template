import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <>
      <p className="text-slate-600 py-4 text-justify text-base md:text-lg ">
        {children}
      </p>
    </>
  );
};

export default Text;
