import Image from "next/image";
import React from "react";

type Props = {
  imageSrc: string;
  head: string;
  imageAlt?: string;
};

const Project_Card = ({ imageSrc, imageAlt, head }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={imageSrc} // Replace with the correct image path
          alt={imageAlt ? imageAlt : head}
          width={500}
          height={400}
          className="object-cover w-full"
        />
        <p className="text-center mt-4 text-2xl font-head uppercase font-medium">
          {head}
        </p>
      </div>
    </>
  );
};

export default Project_Card;
