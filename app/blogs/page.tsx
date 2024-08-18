import dynamic from "next/dynamic";
import Page_Header from "@/app/(components)/Page_Header";
import { blogPosts } from "@/Data/BlogsData";
import BlogPostCard from "../(components)/Blog_Page_Card";

const Pagination = dynamic(() => import("../(components)/Pagination"));

const currentPage = 1; 
const totalPages = 3; 

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
