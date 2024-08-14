import Link from "next/link";

type Props = {
  link: string;
  text: string;
  make?: "dark" | "light";
};

const Mian_Button = ({ link, text, make }: Props) => {
  // Determine border color classes based on the 'make' prop
  const afterBorderColor =
    make === "dark"
      ? "after:border-slate-600"
      : make === "light"
      ? "after:border-white"
      : "after:border-yellow";

  const beforeBorderColor =
    make === "dark"
      ? "before:border-slate-600"
      : make === "light"
      ? "before:border-white"
      : "before:border-yellow";

  return (
    <Link
      href={link}
      className={`group relative text-base px-8 py-3  
    after:border-t-2 after:border-l-2 ${afterBorderColor} after:absolute after:top-0 after:left-0 after:content-[''] after:w-4 after:h-3 hover:after:w-full after:rounded-sm before:rounded-sm hover:after:h-full after:duration-500 after:transition-all 
    before:border-b-2 before:border-r-2 ${beforeBorderColor} before:absolute before:bottom-0 before:right-0 before:content-[''] before:w-4 before:h-3 hover:before:w-full hover:before:h-full before:duration-500 before:transition-all`}
    >
      {text}
    </Link>
  );
};

export default Mian_Button;
