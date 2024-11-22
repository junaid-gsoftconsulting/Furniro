import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
  return (
    <Card
      isPressable
      onPress={() => console.log("item pressed")}
      radius="none"
      className="relative"
    >
      <CardBody className="overflow-hidden p-0">
        <Image
          width="100%"
          alt="product image"
          className="w-full object-cover h-[240px] rounded-none"
          src={product.images[0]}
        />
        <div
          className={`flex justify-center items-center ${
            product.discount === "New" ? "bg-green-300" : "bg-red-400"
          }  rounded-full w-fit p-2 absolute top-5 right-7 z-10 text-white`}
        >
          {product.discount}
        </div>
      </CardBody>
      <CardFooter className=" flex flex-col items-start gap-2 bg-lightGray">
        <b className="text-2xl">{product.name}</b>
        <p className="text-sm text-gray-500">{product.miniDescription}</p>
        <div className="flex gap-4">
          <b>Rp{product.price}</b>
          <del className="text-default-500">Rp{product.discountedPrice}</del>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
