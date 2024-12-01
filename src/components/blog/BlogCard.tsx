import admin from "../../../public/assets/blog/icons/admin.svg";
import date from "../../../public/assets/blog/icons/date.svg";
import category from "../../../public/assets/blog/icons/category.svg";
import SidebarButtons from "../cart/SidebarButtons";
interface BlogCardProps {
  blog: {
    image: string;
    heading: string;
    description: string;
    category: string;
  };
}
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <img src={blog.image} alt="blog image" />
      {/* bar */}
      <div className="flex gap-5">
        <div className="flex gap-2">
          <img src={admin} alt="icon" />
          <p>Admin</p>
        </div>
        <div className="flex gap-2">
          <img src={date} alt="icon" />
          <p>14 Oct 2022</p>
        </div>
        <div className="flex gap-2">
          <img src={category} alt="icon" />
          <p>{blog.category}</p>
        </div>
      </div>
      {/* content */}
      <b className="text-3xl">{blog.heading}</b>
      <p>{blog.description}</p>
    <div>
    <SidebarButtons text="Read more" className="border-b-2 border-black rounded-none"/>

    </div>
    </div>
  );
};

export default BlogCard;
