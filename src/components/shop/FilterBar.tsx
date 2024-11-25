import { Divider } from "@nextui-org/react";
import filter from "../../../public/assets/filter/filter.svg";
import list from "../../../public/assets/filter/list.svg";
import category from "../../../public/assets/filter/category.svg";

interface FilterBarProps {
  totalProducts?: number;
  currentPageStartProduct?: number;
  currentPagEndProduct?: number;
  totalProductsCurrentPage?: number;
}

const FilterBar = ({
  totalProducts,
  currentPageStartProduct,
  currentPagEndProduct,
  totalProductsCurrentPage,
}: FilterBarProps) => {
  return (
    <div className="flex justify-between bg-primary p-4 items-center ">
      {/* left */}
      <div className="flex gap-4">
        <div className="flex gap-4">
          <span>
            <img src={filter} alt="filter" />
          </span>
          <p>Filter</p>
          <span>
            <img src={category} alt="filter" />
          </span>
          <span>
            <img src={list} alt="filter" />
          </span>
        </div>
        <Divider orientation="vertical" className="w-[2px]" />
        <div className="">
          <p>
            Showing {currentPageStartProduct}
            {"-"}
            {currentPagEndProduct} of {totalProducts} results
          </p>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-center items-center text-center gap-2">
        <p>Show</p>
        <div className="bg-white p-2">{totalProductsCurrentPage}</div>
        <p>Sort by</p>
        <div className="bg-white py-2 px-4">Default</div>
      </div>
    </div>
  );
};

export default FilterBar;
