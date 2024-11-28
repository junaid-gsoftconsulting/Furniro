import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import CustomInput from "./CustomInput";
import { Divider } from "@nextui-org/react";
import CustomDropdown from "./CustomDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Checkout = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  const country = ["Pakistan", "India"];
  const provinces = ["Punjab", "KPK", "Balochistan", "Sindh"];
  const total = products.map(
    (product) => Number(product.price) * Number(product.quantity)
  );

  return (
    <div className="flex flex-col ">
      <BreadcrumCard />
      <form className="">
        <b className="m-5 text-2xl">Billing details</b>
        {/* grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left */}
          <div className="bg-red-2 m-5 flex flex-col gap-3">
            <div className="flex flex-col md:flex-row justify-between">
              <CustomInput name="First Name" type="text" />
              <CustomInput name="Last Name" type="text" />
            </div>
            <CustomInput name="Company Name (Optional)" type="text" />
            {/* dropdown */}
            <CustomDropdown options={country} label="Country / Region" />
            <CustomInput name="Street address" type="text" />
            <CustomInput name="Town / City" type="text" />
            {/* dropdown */}
            <CustomDropdown options={provinces} label="Provinces" />
            <CustomInput name="ZIP code" type="text" />
            <CustomInput name="Phone" type="text" />
            <CustomInput name="Email address" type="email" />
          </div>
          {/* right */}
          <div className="bg-green-2 m-5">
            {/* top */}
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <b className="text-xl">Product</b>
                <p>
                  <span className="text-gray-500">
                    {products.map((product) => product.name)}
                  </span>{" "}
                  * {products.map((product) => product.quantity)}
                </p>
                <p>Subtotal</p>
                <p>Total</p>
              </div>
              <div className="flex flex-col items-end w-full">
                <b className="text-xl">Subtotal</b>
                <p>Rs {total}</p>
                <p>Rs {total}</p>
                <p className="text-primaryDark text-2xl font-semibold">
                  Rs {total}
                </p>
              </div>
              <div className=""></div>
            </div>
            <Divider className="my-3" />
          </div>
        </div>
      </form>
      <Banner />
    </div>
  );
};

export default Checkout;
