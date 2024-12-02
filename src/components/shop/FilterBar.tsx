import { Divider, Select, SelectItem } from "@nextui-org/react";
import filter from "../../../public/assets/filter/filter.svg";
import list from "../../../public/assets/filter/list.svg";
import category from "../../../public/assets/filter/category.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import search from "../../assets/navbar/search.svg";
import {
  searchProducts,
  showListView,
  showProductsPerPage,
  sortingProducts,
} from "../slices/PaginationSlice";

const FilterBar = () => {
  const { productsPerPage, currentPage, filteredProducts } = useSelector(
    (state: RootState) => state.pagination
  );
  const dispatch = useDispatch();

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProductStart = startIndex + 1;
  const currentProductEnd =
    endIndex > filteredProducts.length ? filteredProducts.length : endIndex;

  const handleSortChange = (sortBy: string) => {
    dispatch(sortingProducts(sortBy));
  };
  const handleShowProductsPerPage = (showpro: string) => {
    dispatch(showProductsPerPage(showpro));
  };

  const handleShowList = (type: string) => {
    dispatch(showListView(type));
  };
  // search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchProducts(e.target.value));
  };
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between bg-primary p-4 items-center">
      {/* left */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-4">
          <span>
            <img src={filter} alt="filter" />
          </span>
          <p>Filter</p>
          <span
            onClick={() => handleShowList("grid")}
            className="cursor-pointer"
          >
            <img src={category} alt="filter" />
          </span>
          <span
            onClick={() => handleShowList("list")}
            className="cursor-pointer"
          >
            <img src={list} alt="filter" />
          </span>
        </div>
        <Divider orientation="vertical" className="w-[2px]" />
        <div className="">
          <p>
            Showing {currentProductStart}–{currentProductEnd} of{" "}
            {filteredProducts.length} results
          </p>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-2">
        {/* search bar */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={handleSearchChange}
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
            <img src={search} alt="search" className="w-4" />
          </span>
        </div>
        <p>Show</p>
        <div className="bg-white">
          <Select
            placeholder="4"
            className="w-16 rounded-none"
            color="default"
            radius="none"
            style={{ backgroundColor: "#FFFFFF" }}
            key={"4"}
          >
            <SelectItem
              key={"4"}
              onClick={() => handleShowProductsPerPage("4")}
            >
              4
            </SelectItem>
            <SelectItem
              key={"8"}
              onClick={() => handleShowProductsPerPage("8")}
            >
              8
            </SelectItem>
            <SelectItem
              key={"16"}
              onClick={() => handleShowProductsPerPage("16")}
            >
              16
            </SelectItem>
            <SelectItem
              key={"32"}
              onClick={() => handleShowProductsPerPage("32")}
            >
              32
            </SelectItem>
          </Select>
        </div>
        <p>Sort by</p>
        <div className="">
          <Select
            placeholder="Default"
            className="w-32 rounded-none"
            color="default"
            radius="none"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <SelectItem
              key={"default"}
              onClick={() => handleSortChange("default")}
            >
              Default
            </SelectItem>
            <SelectItem key={"asc"} onClick={() => handleSortChange("asc")}>
              Ascending
            </SelectItem>
            <SelectItem key={"desc"} onClick={() => handleSortChange("desc")}>
              Descending
            </SelectItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
