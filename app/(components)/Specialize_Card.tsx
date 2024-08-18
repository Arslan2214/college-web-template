import Image from "next/image";
import Text from "./Text";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  sub_head: string;
  text: string;
};

const Specialize_Card = ({ imageSrc, imageAlt, sub_head, text }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start py-4 px-2">
        <div className="text-4xl">
          <img src={imageSrc} alt={imageAlt ? imageAlt : sub_head} className="h-16 w-[4.5rem]" />
        </div>
        <h6 className="text-2xl mt-3 uppercase font-head">{sub_head}</h6>
        <Text>{text}</Text>
      </div>
    </>
  );
};

export default Specialize_Card;
