import { Card, Image } from "@nextui-org/react";
import CustomButton from "../custom/home/CustomButton";
import { useNavigate } from "react-router-dom";
import like from "../../../public/assets/products/icons/like.svg";
import compare from "../../../public/assets/products/icons/compare.svg";
import share from "../../../public/assets/products/icons/share.svg";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";

interface ProductCardProps {
  product: {
    id?: number;
    images: string[];
    name: string;
    miniDescription: string;
    price: string;
    discountedPrice: string;
    discount: string;
  };
}

const DoubleListProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartHandler = (id: number) => {
    navigate(`/shop/${id}`);
  };
  const addToCartHandler = () => {
    if (product) {
      dispatch(
        AddtoCart({
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images,
          quantity: 1,
        })
      );
      toast.success("Product added to cart");
    }
  };
  return (
    <Card
      isPressable
      radius="none"
      className="relative group shadow-none rounded-none"
      shadow="none"
    >
      <ToastContainer />

      <div className="overflow-hidden p-0 group-hover:opacity-50 rounded-none flex flex-col sm:flex-row gap-3 bg-[#f4f5f7] w-full">
        <div className="">
          <Image
            width="100%"
            alt="product image"
            className="w-full object-cover h-[240px] rounded-none"
            src={product.images[0]}
          />
        </div>
        <div className="flex flex-col gap-3 justify-center p-3">
          <p className="text-start text-3xl font-semibold">{product.name}</p>
          <p className="text-start text-md sm:text-xl">
            {product.miniDescription}
          </p>
        </div>
        <div className="absolute right-2  sm:right-7 bottom-8 sm:bottom-5 z-20 font-semibold text-xl">
          <p>Rs. {product.price}</p>
        </div>
        <div
          className={`flex justify-center items-center ${
            product.discount === "New" ? "bg-green-300" : "bg-red-400"
          }  rounded-full w-10 h-10 absolute top-5 right-7 z-10 text-white`}
        >
          {product.discount}
        </div>
      </div>

      {/* overlay */}
      <div
        className="absolute bg-black/60 inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center gap-2"
        onClick={() => cartHandler(Number(product.id))}
      >
        <CustomButton
          text="Add to Cart"
          className="bg-primary text-primaryDark font-semibold"
          onClick={addToCartHandler}
        />
        <div className="flex text-white gap-5 font-semibold">
          <div className="flex gap-1">
            <img src={share} alt="icon" /> <p>Share</p>
          </div>
          <div className="flex gap-1">
            <img src={compare} alt="icon" /> <p>Compare</p>
          </div>
          <div className="flex gap-1">
            <img src={like} alt="icon" /> <p>Like</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DoubleListProductCard;
