import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Pagination } from "@nextui-org/react";
import { nextPage, prevPage } from "../slices/PaginationSlice";
import ListProductCard from "./ListProductCard";
import DoubleListProductCard from "../slices/DoubleListProductCard";

const AllProducts = () => {
  const { products, productsPerPage, currentPage, setShowListView } =
    useSelector((state: RootState) => state.pagination);

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
      {setShowListView === "list" ? (
        <div className=" m-10">
          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {currentProducts.map((product, index) => {
              return <ListProductCard key={index} product={product} />;
            })}
          </div>
        </div>
      ) : setShowListView === "doubleList" ? (
        <div className=" m-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {currentProducts.map((product, index) => {
              return <DoubleListProductCard key={index} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-8">
          {currentProducts.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      )}
      <div className="flex justify-center mb-4">
        <Pagination
          showControls
          total={totalPages}
          initialPage={currentPage}
          onChange={paginationHandler}
          color="secondary"
        />
      </div>
    </>
  );
};

export default AllProducts;
