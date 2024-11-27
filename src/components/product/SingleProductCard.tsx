import { useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";
import { BreadcrumbItem, Breadcrumbs, Divider } from "@nextui-org/react";
import facebook from "../../../public/assets/singleProduct/facebook.svg";
import linkedin from "../../../public/assets/singleProduct/linkedin.svg";
import twitter from "../../../public/assets/singleProduct/twitter.svg";
import { FaStar } from "react-icons/fa";
import CustomHeading from "../custom/home/CustomHeading";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  miniDescription: string;
  price: string;
  discountedPrice: string;
  quantity: number;
  review: number;
  size: string[];
  sku: string;
  category: string;
  tags: string[];
  discount: string;
  images: string[];
}

const SingleProductCard = () => {
  const [products, setProducts] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<string| null>(null);
  const { id } = useParams();

  useEffect(() => {
    const product = data.products.find((product) => product.id === Number(id));
    setProducts(product || null);

    if (product) {
      const filteredProducts = data.products.filter(
        // (filteredProduct) => filteredProduct.category === product.category && filteredProduct.id !== product.id
        (filteredProduct) => filteredProduct.category === product.category
      );
      setRelatedProducts(filteredProducts);
    }

    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [id]);

  const imageHandler = (image: string) => {
    setSelectedImage(image);
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col">
      {/* breadcrumb  */}
      <div className="bg-primary p-5">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/shop">shop</BreadcrumbItem>
          <BreadcrumbItem href="/shop">{products?.name}</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      {/* product */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        {/* left */}
        <div className="flex gap-3 justify-start  md:justify-center p-3">
          {/* left images */}
          <div className="flex flex-col gap-2 cursor-pointer">
            {products?.images.map((image, index) => {
              return (
                <div
                  className="h-20 w-20 rounded-lg overflow-hidden"
                  key={index}
                >
                  <img
                    src={image}
                    alt="product image"
                    onClick={() => imageHandler(image)}
                  />
                </div>
              );
            })}
          </div>
          {/* right image */}
          <div className="">
            <img
              src={selectedImage}
              alt="product"
              className="rounded-lg overflow-hidden h-96 md:h-[22rem]"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-2">
          <b className="text-3xl">{products?.name}</b>
          <p className="text-gray-500 font-semibold">Rs. {products?.price}</p>
          {/* reviews */}
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <FaStar className="text-[#ffc700]" />
              <FaStar className="text-[#ffc700]" />
              <FaStar className="text-[#ffc700]" />
              <FaStar className="text-[#ffc700]" />
              <FaStar className="text-[#ffc700]" />
            </div>
            <Divider orientation="vertical" />
            <p className="text-gray-500">{products?.review} customer reviews</p>
          </div>
          <p className="max-w-xl">{products?.description}</p>
          {/* sizes */}
          <div className="flex flex-col">
            <span className="text-gray-500 ">Size</span>
            <div className="flex gap-4">
              {products?.size.map((size, index) => {
                return (
                  <div
                    className={` p-2 rounded-lg w-8 text-center cursor-pointer ${
                      isActive === size ? "bg-primaryDark" : "bg-primary"
                    }`}
                    onClick={() => setIsActive(size) }
                    key={index}
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
          {/* colors */}
          <div className="flex flex-col">
            <span className="text-gray-500">Color</span>
            <div className="flex gap-2">
              <div className="rounded-full h-6 w-6 bg-[#816dfa]"></div>
              <div className="rounded-full h-6 w-6 bg-black"></div>
              <div className="rounded-full h-6 w-6 bg-primaryDark"></div>
            </div>
          </div>
          {/* buttons */}
          <div className="flex">
            <div className="flex justify-between items-center border border-black text-center py-2 px-2 gap-4 rounded-lg mr-2">
              <span onClick={handleDecrement} className="cursor-pointer">
                -
              </span>
              <span className="">{count}</span>
              <span onClick={handleIncrement} className="cursor-pointer">
                +
              </span>
            </div>
            <div className="border border-black text-center py-2 px-6 rounded-lg mr-2 cursor-pointer">
              Add To Cart
            </div>
            <div className="border border-black text-center py-2 px-6 rounded-lg cursor-pointer">
              <span>+</span> Compare
            </div>
          </div>
          {/* divider */}
          <Divider className="my-4 w-[90%]" />
          {/* lower part */}
          <div className="flex flex-col gap-2 text-gray-500">
            <div className="flex gap-2">
              <span className="w-16">SKU</span>
              <span>:</span>
              {products?.sku}
            </div>
            <div className="flex gap-2">
              <span className="w-16">Category</span>
              <span>:</span>
              {products?.category}
            </div>
            <div className="flex gap-2">
              <span className="w-16">Tags</span>
              <span>:</span>
              {products?.tags.map((tag, index) => {
                return <span key={index}>{tag},</span>;
              })}
            </div>
            <div className="flex gap-2">
              <span className="w-16">Share</span>
              <span>:</span>
              <div className="flex gap-2">
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related products */}
      <div className="flex flex-col">
        <CustomHeading heading="Related Products" />
         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 m-5" >
        {relatedProducts.map((prod,index) =>{
           return <ProductCard product={prod} key={index}/>
          })}
          </div>
      </div>
    </div>
  );
};

export default SingleProductCard;











