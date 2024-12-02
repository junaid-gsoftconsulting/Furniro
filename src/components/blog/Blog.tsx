import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import data from "../data.json";
import BlogCard from "./BlogCard";
import BlogCategories from "./BlogCategories";
import RecentPosts from "./RecentPosts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { nextPage, prevPage } from "../slices/BlogPaginationSlice";
import { Pagination } from "@nextui-org/react";

const Blog = () => {
  const blogs = data.blogs;
  const { currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.blogPagination
  );

  const dispatch = useDispatch();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = blogs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const paginationHandler = (page: number) => {
    if (page > currentPage) {
      dispatch(nextPage());
    } else {
      dispatch(prevPage());
    }
  };
  return (
    <div>
      <BreadcrumCard />
      <div className="flex flex-col md:flex-row m-5 md:m-20 gap-10">
        {/* left */}
        <div className=" w-full md:w-[70%]">
          {currentProducts.map((blog, index) => {
            return <BlogCard key={index} blog={blog} />;
          })}
          <div className="flex justify-center mb-4">
            <Pagination
              showControls
              total={totalPages}
              initialPage={currentPage}
              onChange={paginationHandler}
            />
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-[30%]">
          <BlogCategories />
          <RecentPosts />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Blog;
