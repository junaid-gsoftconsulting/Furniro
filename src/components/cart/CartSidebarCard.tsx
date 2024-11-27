import { useDispatch } from "react-redux";
import close from "../../../public/assets/sidebar/cardcloseicon.svg";
import { removeFromCart } from "../slices/CartSlice";

interface CartSidebarCardProps {
  product: {
    id?:number,
    name: string;
    quantity: number;
    price: string;
    images: string[];
  };
}

const CartSidebarCard = ({ product }: CartSidebarCardProps) => {
  const dispatch = useDispatch();

  const removeProductHandler= () =>{
    dispatch(removeFromCart({
      id: product.id
    }))
  }

  return (
    <div className="flex justify-between items-center border-b py-4">
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={product.images[0]}
          alt="product image"
          className="w-20 h-20 rounded-lg object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center flex-grow px-4">
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-gray-500">
          {product.quantity} * Rs. {product.price}
        </p>
        <p className="font-bold">Rs. {+product.quantity * +product.price}</p>
      </div>

      {/* Remove Icon */}
      <button onClick={removeProductHandler}>
        <img src={close} alt="Remove item" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default CartSidebarCard;
