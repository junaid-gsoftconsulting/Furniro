import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import data from "../data.json";
import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";
import RecentPosts from "./RecentPosts";

const Blog = () => {
  const blogs = data.blogs;

  return (
    <div>
      <BreadcrumCard />
      <div className="flex flex-col md:flex-row m-20 gap-10">
        {/* left */}
        <div className="w-[70%]">
            {blogs.map((blog, index) =>{
               return  <BlogCard key={index} blog={blog}/>
            })}
        </div>
        {/* right */}
        <div className="w-[30%]">
            <BlogCategories/>
            <RecentPosts/>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Blog;
