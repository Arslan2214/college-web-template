import React from "react";

type Props = {
  head: string;
  sub_head: string;
  align?: "start" | "center";
};

const Section_Head = (props: Props) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center ${
          props.align == "center" ? "items-center text-center" : "items-start"
        }`}
      >
        <span className="uppercase text-lg font-semibold text-yellow">
          {props.head}
        </span>
        <h3 className="uppercase text-4xl sm:text-5xl lg:text-6xl text-black font-headText">{props.sub_head}</h3>
      </div>
    </>
  );
};

export default Section_Head;
