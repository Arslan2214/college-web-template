import Link from "next/link";
import Section_Head from "./Section_Head";

type Props = {
  head: string;
  sub_head: string;
  btn_text: string;
  btn_link: string;
};

const Banner = ({ head, sub_head, btn_text, btn_link }: Props) => {
  return (
    <div
      className="relative h-[60vh] my-16 bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/img/banner_img.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-75 transition duration-500 ease-in-out"></div>
      <div className="flex flex-col gap-14 z-10 max-w-7xl">
        <Section_Head
          head={head}
          sub_head={sub_head}
          align="center"
          make="dark"
        />
        {(btn_text.length != 0 || btn_link.length != 0) && (
          <div className="flex justify-center items-center">
            <Link
              href={btn_link}
              className="px-7 py-3 bg-yellow text-white text-lg rounded transition duration-300 capitalize"
            >
              {btn_text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
