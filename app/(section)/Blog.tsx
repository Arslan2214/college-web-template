import BlogCard from "../(components)/Blog_Card";
import Post_Section_Head from "../(components)/Post_Section_Head";

const Blog = () => {
  return (
    <section className="cont-block">
      <Post_Section_Head
        sub_head="Latest News"
        head="From our blog"
        btn_Link="/blogs"
        btn_Text="View all"
      />
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-center justify-center gap-5 py-6 md:py-10">
        <BlogCard src="/img/blog/blog1.jpg" head="Architecture" text="Target and Amazon Shopping List for Home Stagers"  />
        <BlogCard src="/img/blog/blog3.jpg" head="Interior" text="6 Ideas for Team Building and Employee Appreciation for Home Stagers"  />
        <BlogCard src="/img/blog/blog2.jpg" head="Planning" text="How to Find the Best Price Structure for Your Home Staging Services"  />
      </div>
    </section>
  );
};

export default Blog;
