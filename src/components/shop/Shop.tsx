import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import AllProducts from "../product/AllProducts";
import FilterBar from "./FilterBar";
import data from "../data.json";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../slices/PaginationSlice";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(data.products));
  }, [dispatch]);

  return (
    <div>
      <BreadcrumCard />
      <FilterBar />
      <AllProducts />
      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Shop;
