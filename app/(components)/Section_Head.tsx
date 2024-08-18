type Props = {
  head: string;
  sub_head: string;
  align?: "start" | "center";
  make?: "dark" | "white";
};

const Section_Head = (props: Props) => {
  const bg = props.make == "dark" ? "text-slate-100" : "text-black";

  return (
    <>
      <div
        className={`flex flex-col justify-center ${
          props.align === "center" ? "items-center text-center" : "items-start"
        }`}
      >
        <span className="uppercase text-lg font-semibold text-yellow">
          {props.head}
        </span>
        <h3 className={`uppercase text-3xl sm:text-5xl ${bg} font-head`}>
          {props.sub_head}
        </h3>
      </div>
    </>
  );
};

export default Section_Head;
