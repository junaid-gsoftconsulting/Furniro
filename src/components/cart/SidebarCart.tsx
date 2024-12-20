import { Divider } from "@nextui-org/react";
import closeIcon from "../../../public/assets/sidebar/closeicon.svg";
import SidebarButtons from "./SidebarButtons";
import CartSidebarCard from "./CartSidebarCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SidebarCartProps {
  onClose: () => void;
}

const SidebarCart = ({ onClose }: SidebarCartProps) => {
  const { products } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("/cart");
    onClose();
  };
  const checkoutHandler = () => {
    if (products.length === 0) {
      toast.error("Kindly Add some product to cart");
    } else {
      navigate("/checkout");
      onClose();
    }
  };
  return (
    <div className="fixed top-0 right-0 w-full sm:w-[75%] md:w-1/3 h-full bg-white shadow-lg z-50 p-8 no-doc-scroll">
      {/* sidebar header */}
      <div className="flex items-center justify-between h-[5%]">
        <b className="text-xl">Shopping Cart</b>
        <button
          onClick={onClose}
          className="absolute top-10 right-8 text-xl text-gray-600"
        >
          <img src={closeIcon} alt="icon" />
        </button>
      </div>
      {/* Divider */}
      <div className="mx-8 my-4">
        <Divider />
      </div>
      {/* sidebar body */}
      <div className="flex flex-col h-[80%] overflow-y-auto p-1">
        {products.length > 0 ? (
          products.map((product, index) => (
            <CartSidebarCard product={product} key={index} />
          ))
        ) : (
          <p className="text-center text-gray-500">cart is empty.</p>
        )}

        {/* {
          products.map((pro,index) =>{
            return <CartSidebarCard product={pro} quantity={2} key={index}/>
          })
        } */}
        {/* <CartSidebarCard name="xyz" price="12345" quantity={3} image={img}/> */}
      </div>
      {/* Sidebar footer */}
      <div className="flex flex-col gap-3 justify-end h-[15%] bg-white ">
        {/* <Divider orientation="horizontal" /> */}
        <div className="flex flex-wrap gap-3 p-2 justify-evenly w-full relative bg-white">
          <SidebarButtons
            text="Cart"
            onClick={cartHandler}
            className="border border-black rounded-xl"
          />
          <ToastContainer />

          <SidebarButtons
            text="Checkout"
            onClick={checkoutHandler}
            className="border border-black rounded-xl"
          />
          <SidebarButtons
            text="Comparison"
            className="border border-black rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarCart;
