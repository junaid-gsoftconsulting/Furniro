import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import CustomInput from "./CustomInput";
import { Divider } from "@nextui-org/react";
import CustomDropdown from "./CustomDropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import SidebarButtons from "../cart/SidebarButtons";
import CustomPaymentMethod from "./CustomPaymentMethod";
import { RiCloseLine } from "react-icons/ri";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormSchema } from "../utils/CheckoutValidation";

const Checkout = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>();
  const { products } = useSelector((state: RootState) => state.cart);

  const country = ["Pakistan", "India"];
  const provinces = ["Punjab", "KPK", "Balochistan", "Sindh"];
  const total = products.map(
    (product) => Number(product.price) * Number(product.quantity)
  );
  const paymentMethods = [
    {
      id: "bank",
      label: "Direct Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    {
      id: "cash",
      label: "Cash On Delivery",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
  ];
  const paymentHandler = (methodId: string) => {
    setActivePaymentMethod(methodId);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(CheckoutFormSchema),
  });

  const submitHandler = (data: unknown) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col ">
      <BreadcrumCard />
      <form className="m-16" onSubmit={handleSubmit(submitHandler)}>
        <b className="text-2xl ml-5">Billing details</b>
        {/* grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* left */}
          <div className="m-5 flex flex-col gap-3">
            <div className="flex flex-col lg:flex-row gap-2 w-full">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => {
                  return (
                    <CustomInput
                      type="text"
                      name="First Name"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                  );
                }}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field }) => {
                  return (
                    <CustomInput
                      type="text"
                      name="Last Name"
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                  );
                }}
              />
            </div>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    type="text"
                    name="Company Name (Optional)"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                );
              }}
            />
            {/* dropdown */}
            <CustomDropdown options={country} label="Country / Region" />

            <Controller
              name="streetAddress"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    type="text"
                    name="Street address"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                );
              }}
            />
            <Controller
              name="town"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    type="text"
                    name="Town / City"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                );
              }}
            />
            {/* dropdown */}
            <CustomDropdown options={provinces} label="Provinces" />
            <Controller
              name="zip"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    type="text"
                    name="ZIP code"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                );
              }}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    type="text"
                    name="Phone"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                );
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <CustomInput
                    name="Email address"
                    type="email"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                );
              }}
            />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 bg-green-2 m-5">
            {/* top */}
            {Number(total) === 0 ? (
              <p>No products in cart</p>
            ) : (
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <b className="text-xl">Product</b>
                  <p className="flex justify-center items-center">
                    <span className="text-gray-500">
                      {products.map((product) => product.name)}
                    </span>{" "}
                    <RiCloseLine className="text-black" />{" "}
                    {products.map((product) => product.quantity)}
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
            )}
            <Divider className="my-3" />
            <div className="flex flex-col">
              {/* payment method */}
              <div>
                {paymentMethods.map((paymentMethod) => (
                  <CustomPaymentMethod
                    description={paymentMethod.description}
                    label={paymentMethod.label}
                    isActive={activePaymentMethod === paymentMethod.id}
                    onClick={() => paymentHandler(paymentMethod.id)}
                    methodId={paymentMethod.id}
                  />
                ))}
              </div>
            </div>
            {/* description */}
            <div className="">
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-bold">privacy policy.</span>
              </p>
            </div>
            <div className="flex justify-center ">
              <SidebarButtons
                text="Place order"
                className="w-36 md:w-72 border border-black rounded-xl"
                onClick={() => handleSubmit}
              />
            </div>
          </div>
        </div>
      </form>
      <Banner />
    </div>
  );
};

export default Checkout;
