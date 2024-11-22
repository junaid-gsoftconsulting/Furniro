import React from "react";
import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import AllProducts from "../product/AllProducts";


const Shop = () => {
  return (
    <div>
      <BreadcrumCard />
      <AllProducts/>
      {/* Banner */}
      <Banner/>
    </div>
  );
};

export default Shop;
