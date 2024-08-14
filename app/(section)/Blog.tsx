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
      <div>
        <BlogCard head="Architecture" text="Target and Amazon Shopping List for Home Stagers"  />
      </div>
    </section>
  );
};

export default Blog;
