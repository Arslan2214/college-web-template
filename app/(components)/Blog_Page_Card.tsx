// components/BlogPostCard.tsx
import Image from 'next/image';
import React from 'react';
import Text from './Text';

interface BlogPostCardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, imageSrc, description }) => {
  return (
    <article className="flex flex-col justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <h2 className="mb-4 text-2xl py-2 border-b font-bold tracking-tight font-head uppercase text-gray-900">
        <a href="#">{title}</a>
      </h2>
      <div className="w-full mb-4">
        <Image
          width={400}
          height={300}
          alt="blog_Image"
          className="object-cover w-full h-full"
          src={imageSrc}
        />
      </div>
      <Text className="text-sm">{description}</Text>
    </article>
  );
};

export default BlogPostCard;
