import ProductCard from "./ProductCard";
import data from "../data.json";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-8">
      {data.products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default AllProducts;
