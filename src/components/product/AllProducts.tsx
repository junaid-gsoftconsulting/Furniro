import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Pagination } from "@nextui-org/react";
import { nextPage, prevPage } from "../slices/PaginationSlice";

const AllProducts = () => {
  const { products, productsPerPage, currentPage } = useSelector(
    (state: RootState) => state.pagination
  );

  const dispatch = useDispatch();

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginationHandler = (page: number) => {
    if (page > currentPage) {
      dispatch(nextPage());
    } else {
      dispatch(prevPage());
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-8">
        {currentProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
      <div className="flex justify-center mb-4">
        <Pagination
          showControls
          total={totalPages}
          initialPage={currentPage}
          onChange={paginationHandler}
          color="warning"
        
        />
      </div>
    </>
  );
};

export default AllProducts;
