import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import CustomButton from "../custom/home/CustomButton";
import { useNavigate } from "react-router-dom";
import like from "../../../public/assets/products/icons/like.svg";
import compare from "../../../public/assets/products/icons/compare.svg";
import share from "../../../public/assets/products/icons/share.svg";
import { AddtoCart } from "../slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

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

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {products} =  useSelector((state:RootState) => state.cart)
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
      onPress={() => console.log("item pressed")}
      radius="none"
      shadow="none"
      className="relative group"
    >
      <ToastContainer />
      <CardBody className="overflow-hidden p-0 group-hover:opacity-50">
        <Image
          width="100%"
          alt="product image"
          className="w-full object-cover h-[240px] rounded-none"
          src={product.images[0]}
        />
        <div
          className={`flex justify-center items-center ${
            product.discount === "New" ? "bg-green-300" : "bg-red-400"
          }  rounded-full w-10 h-10 absolute top-5 right-7 z-10 text-white`}
        >
          {product.discount}
        </div>
      </CardBody>

      <CardFooter className="flex flex-col items-start gap-2 bg-lightGray group-hover:opacity-50">
        <b className="text-2xl">{product.name}</b>
        <p className="text-sm text-gray-500">{product.miniDescription}</p>
        <div className="flex gap-4">
          <b>Rp{product.price}</b>
          <del className="text-default-500">Rp{product.discountedPrice}</del>
        </div>
      </CardFooter>
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

export default ProductCard;
