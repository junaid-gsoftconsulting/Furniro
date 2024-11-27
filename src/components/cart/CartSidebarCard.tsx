import close from "../../../public/assets/sidebar/cardcloseicon.svg";

interface CartSidebarCardProps {
  name: string;
  quantity: number;
  price: string;
  image: string;
}
const CartSidebarCard = ({
  image,
  name,
  quantity,
  price,
}: CartSidebarCardProps) => {
  return (
    <div className="flex justify-between">
      {/* image */}
      <div className="">
        <img src={image} alt="image" className="w-32 h-32 rounded-lg" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-3 justify-center">
        <p>{name}</p>
        <div className="flex">
          {quantity}  {"*"} {price}
        </div>
      </div>
      {/* icon */}
      <div className="flex ">
        <img src={close} alt="close" />
      </div>
    </div>
  );
};

export default CartSidebarCard;
