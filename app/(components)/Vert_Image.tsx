import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function DesignSection(props: Props) {
  return (
    <div className="flex justify-center items-center">
      {/* Image Wrapper with border */}
      <div className="relative p-2">
        <span className="top-5 left-8 -z-10 absolute rounded-sm border-[15px] border-yellow/30 w-full h-full"></span>
        <Image
          src={props.src}
          alt={props.alt ? props.alt : "image.jpg"}
          className="rounded-sm max-h-screen"
          layout="responsive"
          width={props.width ?  props.width : 600}
          height={props.height ?  props.height : 300}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
