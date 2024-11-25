import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import AllProducts from "../product/AllProducts";
import FilterBar from "./FilterBar";
import data from "../data.json";

const Shop = () => {
  const products = data.products.length;
  

  return (
    <div>
      <BreadcrumCard />
      <FilterBar totalProducts={products} />
      <AllProducts />
      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Shop;
