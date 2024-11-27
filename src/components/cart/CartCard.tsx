import cart from "/assets/cart/delete.svg";

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

  return (
    <div>
      <div className="flex p-3 w-full">
        <div className="w-1/5">

        <img src={product.images[0]} alt="product-image" className="w-32 h-24 object-cover rounded-xl"/>
        </div>
        <p className="w-1/5">{product.name}</p>
        <div className="w-1/5">
        <p className="border border-black px-2 rounded-lg w-fit">{product.quantity}</p>
        </div>
        <p className="w-1/5">{Number(product.price) * Number(product.quantity)}</p>
        <div>
            <img src={cart} alt="cart" />
        </div>
   
      </div>
    </div>
  );
};

export default CartCard;
