import Page_Header from "@/app/(components)/Page_Header";
import Image from "next/image";
import Text from "../(components)/Text";
import Blog_Card from "../(components)/Blog_Card";
import { blogPosts } from "@/Data/BlogsData";
import BlogPostCard from "../(components)/Blog_Page_Card";
import Pagination from "../(components)/Pagination";

const currentPage = 1; // Current page number
const totalPages = 3; // Total number of pages

const page = () => {
  return (
    <>
      <Page_Header head="Blogs" />
      <section className="cont-block grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            imageSrc={post.imageSrc}
            description={post.description}
          />
        ))}
      </section>
      <hr className="w-[80%] my-8 mx-auto" />
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default page;
