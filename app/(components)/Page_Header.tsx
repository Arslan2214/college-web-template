import Section_Head from "./Section_Head";

type Props = {
  head: string;
};

const Banner = ({ head }: Props) => {
  return (
    <div
      className="relative h-[45vh] mb-16 bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/img/section_banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-75 transition duration-500 ease-in-out"></div>
      <div className="flex flex-col  z-10 max-w-7xl">
        <h3 className={`uppercase text-2xl text-white sm:text-5xl font-head`}>
          {head}
        </h3>
        <span className="capitalize text-base text-white">
          Home ~ <span className="text-yellow">{head}</span>
        </span>
      </div>
    </div>
  );
};

export default Banner;
