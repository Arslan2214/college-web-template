import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  head: string;
  text: string;
  src: string;
  link?: string;
};

export default function BlogCard({ head, text, src, link }: Props) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-[0_15px_55px_2px_#ddd] rounded-sm overflow-hidden">
      {/* Using a sample image URL directly instead of props */}
      <Image
        className="w-full h-48 object-cover"
        src={src}
        alt={head}
        width={400}
        height={200}
      />
      <div className="group p-4">
        <p className="mt-2 text-gray-400">{head}</p>
        <h2 className="text-xl font-semibold text-gray-800">{text}</h2>
        
        <Link href={link ? link : '/blog'} className={`${!link && 'none'} mt-24 flex items-center`}>
          Read More{" "}
          <span className="ml-3 group-hover:ml-6 duration-500">
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
    </div>
  );
}
