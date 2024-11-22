import ProductCard from "./ProductCard";
import data from "../data.json";

const AllProducts = () => {
  return (
    <div className="flex gap-2">
      {data.products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </div>
  );
};

export default AllProducts;
