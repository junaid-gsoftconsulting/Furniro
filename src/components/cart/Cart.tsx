import SidebarButtons from "./SidebarButtons";
import Banner from "../custom/shop/Banner";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const subTotal = products.map((product) => {
    return Number(product.price) * Number(product.quantity);
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 m-10">
        {/* left */}
        <div className="w-full md:w-[80%] flex flex-col gap-5">
          <div className="flex justify-start items-start bg-primary py-3 px-1 gap-1 w-full">
            <p className="font-semibold w-full md:w-1/5">Product</p>
            <p className="font-semibold w-full md:w-1/5 text-center">Price</p>
            <p className="font-semibold w-full md:w-1/5">Quantity</p>
            <p className="font-semibold w-full md:w-1/5">Subtotal</p>
          </div>
          {Number(subTotal) === 0 ? (
            <b className="text-center">No products in cart</b>
          ) : (
            <div className="">
              {products.map((prod, index) => {
                return <CartCard product={prod} key={index} />;
              })}
            </div>
          )}
          {/* <div className="flex justify-between bg-primary p-3">
            <img src={products} alt="" />
        </div> */}
        </div>
        {/* right */}
        <div className="w-full md:w-[20%] bg-primary flex flex-col justify-center items-center gap-3 py-3">
          <b className="text-3xl">Cart Totals</b>
          {Number(subTotal) === 0 ? (
            <p>No subtotal yet</p>
          ) : (
            <>
              <div className="flex gap-5">
                <b>Subtotal</b>{" "}
                <p className="text-gray-500">
                  {products.reduce((acc, product) => {
                    return acc + Number(product.price) * product.quantity;
                  }, 0)}
                </p>
              </div>
              <div className="flex gap-5">
                <b>Total</b>{" "}
                <p className="text-primaryDark">
                  {" "}
                  {products.reduce((acc, product) => {
                    return acc + Number(product.price) * product.quantity;
                  }, 0)}
                </p>
              </div>
              <div className="">
                <SidebarButtons
                  text="Checkout"
                  className="border border-black rounded-xl"
                  onClick={() => navigate("/checkout")}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Cart;
