import Image from "next/image";

type Props = {
  head: string;
  text: string;
  author?: string;
  date?: string;
};

export default function BlogCard({ head, text, author, date }: Props) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Using a sample image URL directly instead of props */}
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x200.png?text=Sample+Image"
        alt={head}
        width={400}
        height={200}
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{head}</h2>
        <p className="mt-2 text-gray-600">{text}</p>
        <div className="flex items-center mt-4">
          {/* You can use another sample image for the author */}
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://via.placeholder.com/100.png?text=Author"
            alt={author || 'blogImage.jpg'}
            width={40}
            height={40}
          />
          <div className="ml-4">
            <h3 className="text-gray-700 font-medium">{author}</h3>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
