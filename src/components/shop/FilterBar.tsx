import { Divider, Select, SelectItem } from "@nextui-org/react";
import filter from "../../../public/assets/filter/filter.svg";
import list from "../../../public/assets/filter/list.svg";
import category from "../../../public/assets/filter/category.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  showListView,
  showProductsPerPage,
  sortingProducts,
} from "../slices/PaginationSlice";

const FilterBar = () => {
  const { products, productsPerPage, currentPage } = useSelector(
    (state: RootState) => state.pagination
  );
  const dispatch = useDispatch();

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProductStart = startIndex + 1;
  const currentProductEnd =
    endIndex > products.length ? products.length : endIndex;

  const handleSortChange = (sortBy: string) => {
    dispatch(sortingProducts(sortBy));
  };
  const handleShowProductsPerPage = (showpro: string) => {
    dispatch(showProductsPerPage(showpro));
  };

  const handleShowList = (type: string) => {
    dispatch(showListView(type));
  };
  return (
    <div className="flex justify-between bg-primary p-4 items-center">
      {/* left */}
      <div className="flex gap-4">
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
            Showing {currentProductStart}–{Number(currentProductEnd)} of {products.length} results
          </p>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-center items-center text-center gap-2">
        <p>Show</p>
        <div className="bg-white">
          <Select
            placeholder="4"
            className="w-16 rounded-none"
            color="default"
            radius="none"
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
            // label="Favorite Animal"
            placeholder="Default"
            className="w-32 rounded-none"
            color="default"
            radius="none"
          >
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
