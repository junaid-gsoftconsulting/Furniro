import { useDispatch } from "react-redux";
import cart from "/assets/cart/delete.svg";
import { removeFromCart } from "../slices/CartSlice";
import { decreaseQuantity, increaseQuantity } from "../slices/CartSlice";
import { useState } from "react";
import { Divider } from "@nextui-org/react";

interface CardCardProps {
  product: {
    id?: number;
    images: string[];
    name: string;
    price: string;
    quantity: number;
  };
}

const CartCard = ({ product }: CardCardProps) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const deleteHandler = () => {
    dispatch(removeFromCart(product));
    setIsModalOpen(false); 
  };

   
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-start items-center p-3 w-full">
        <div className="w-full md:w-1/5 flex justify-center ">
          <img
            src={product.images[0]}
            alt="product-image"
            className="w-32 h-24 object-cover rounded-xl"
          />
        </div>
        <p className="w-full md:w-1/5 flex justify-center ">{product.name}</p>
        <div className="w-full md:w-1/5 flex justify-center ">
          <div className="flex gap-3 ">
            <button
              onClick={() => handleDecrease(Number(product.id))}
              className="px-2 py-1 bg-primaryDark text-white rounded"
            >
              -
            </button>
            <p className="border border-black px-2 rounded-lg w-fit flex items-center">
              {Number(product.quantity)}
            </p>
            <button
              onClick={() => handleIncrease(Number(product.id))}
              className="px-2 py-1 bg-primaryDark text-white rounded"
            >
              +
            </button>
          </div>
        </div>
        <p className="w-full md:w-1/5 flex justify-center ">
          {Number(product.price) * Number(product.quantity)}
        </p>
        <div>
          <img
            src={cart}
            alt="cart"
            onClick={openModal}
            className="cursor-pointer"
          />
        </div>
        <div>
          <Divider orientation="horizontal"/>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold">Are you sure you want to delete this item?</h2>
            <div className="flex justify-end gap-3 mt-4">
            <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-black rounded"
              >
                Cancel
              </button>
              <button
                onClick={deleteHandler}
                className="px-4 py-2 bg-primaryDark text-white rounded"
              >
                Confirm
              </button>
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
