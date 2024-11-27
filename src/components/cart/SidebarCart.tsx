import { Divider } from "@nextui-org/react";
import closeIcon from "../../../public/assets/sidebar/closeicon.svg";
import img from "../../../public/assets/products/muggo.svg";

import SidebarButtons from "./SidebarButtons";
import CartSidebarCard from "./CartSidebarCard";
interface SidebarCartProps {
  onClose: () => void;
}
const SidebarCart = ({ onClose }: SidebarCartProps) => {
  return (
    <div className="fixed top-0 right-0 w-full sm:w-[75%] md:w-1/3 h-full bg-white shadow-lg z-50 p-8">
      {/* sidebar header */}
      <div className="flex items-center justify-between">
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
      <div className="flex flex-col">
      <CartSidebarCard name="xyz" price="12345" quantity={3} image={img}/>
      </div>
      {/* Sidebar footer */}
      <div className="flex flex-col gap-3 justify-end h-[33rem]">
        <Divider orientation="horizontal"/>
       <div className="flex flex-wrap gap-3 p-2 justify-evenly w-full">
       <SidebarButtons text="Cart" />
        <SidebarButtons text="Checkout" />
        <SidebarButtons text="Comparison" />
       </div>
      </div>
    </div>
  );
};

export default SidebarCart;
