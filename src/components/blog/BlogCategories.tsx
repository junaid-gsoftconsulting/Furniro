import { useEffect, useState } from "react";
import CustomInput from "../checkout/CustomInput";
import { IoSearch } from "react-icons/io5";
import data from "../data.json";

const BlogCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [woodCount, setWoodCount] = useState(0);
  const [handmadeCount, setHandmadeCount] = useState(0);

  const blogs = data.blogs;
  useEffect(() => {
    const categoryList = blogs.map((blog) => blog.category);
    const uniqueCategories = [...new Set(categoryList)];
    const woodCount = categoryList.filter(
      (category) => category === "Wood"
    ).length;
    const handmadeCount = categoryList.filter(
      (category) => category === "Handmade"
    ).length;
    setCategories(uniqueCategories);
    setWoodCount(woodCount);
    setHandmadeCount(handmadeCount);
  }, [blogs]);
  return (
    <div className="flex flex-col">
      <div className="relative">
        <CustomInput type="text" className="border-gray-400 pl-8" />
        <IoSearch className="absolute right-2 top-3" />
      </div>
      <div className="flex flex-col">
        <b>Categories</b>
        <div className="flex justify-between">
          <div className="text-gray-500 flex flex-col gap-3">
            {categories.length > 0 ? (
              categories.map((category, index) => <p key={index}>{category}</p>)
            ) : (
              <p>No categories available</p>
            )}
          </div>
          {/* counts */}
          <div className="text-gray-500 flex flex-col gap-3">
            <p>{woodCount}</p>
            <p>{handmadeCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
