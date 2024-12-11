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
import { Controller, FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormSchema } from "../utils/CheckoutValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiCloseLine } from "react-icons/ri";

const Checkout = () => {
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>();
  const { products } = useSelector((state: RootState) => state.cart);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const country = ["Pakistan", "India"];
  const provinces = ["Punjab", "KPK", "Balochistan", "Sindh"];
  // const total = products.map(
  //   (product) => Number(product.price) * Number(product.quantity)
  // );
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
    if (!isSubmitting) {
      setIsSubmitting(true);
      toast.success("Your order have been placed");

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
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
            <div className="flex flex-col lg:flex-row gap-2">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col w-full">
                      <CustomInput
                        type="text"
                        name="First Name"
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {errors.firstName && (
                        <span className="text-red-500 text-sm">
                          {(errors.firstName as FieldError).message}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => {
                  return (
                    <div className="flex flex-col w-full">
                      <CustomInput
                        type="text"
                        name="Last Name"
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {errors.lastName && (
                        <span className="text-red-500 text-sm">
                          {(errors.lastName as FieldError).message}
                        </span>
                      )}
                    </div>
                  );
                }}
              />
            </div>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="text"
                      name="Company Name (Optional)"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.companyName && (
                      <span className="text-red-500 text-sm">
                        {(errors.companyName as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <CustomDropdown
                    {...field}
                    options={country}
                    label="Country / Region"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.country && (
                    <span className="text-red-500 text-sm">
                      {(errors.country as FieldError).message}
                    </span>
                  )}
                </div>
              )}
            />

            <Controller
              name="province"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col">
                  <CustomDropdown
                    {...field}
                    options={provinces}
                    label="Provinces"
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.province && (
                    <span className="text-red-500 text-sm">
                      {(errors.province as FieldError).message}
                    </span>
                  )}
                </div>
              )}
            />

            <Controller
              name="streetAddress"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="text"
                      name="Street address"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.streetAddress && (
                      <span className="text-red-500 text-sm">
                        {(errors.streetAddress as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              name="town"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="text"
                      name="Town / City"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.town && (
                      <span className="text-red-500 text-sm">
                        {(errors.town as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              name="zip"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="text"
                      name="ZIP code"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.zip && (
                      <span className="text-red-500 text-sm">
                        {(errors.zip as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="text"
                      name="Phone"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm">
                        {(errors.phone as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <div className="flex flex-col">
                    <CustomInput
                      type="email"
                      name="Email address"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {(errors.email as FieldError).message}
                      </span>
                    )}
                  </div>
                );
              }}
            />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 bg-green-2 m-5">
            {/* top */}
            {/* {Number(total) === 0 ? (
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
                    {products.map((product) => product.quantity )}
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
            )} */}
            {Number(products.length) === 0 ? (
              <p>No products in cart</p>
            ) : (
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <b className="text-xl">Product</b>
                  {/*prod and quantity */}
                  {products.map((product, index) => (
                    <p key={index} className="flex justify-between">
                      <span className="text-gray-500">{product.name}</span>
                      <span className="flex justify-center items-center">
                        <RiCloseLine className="text-gray-500" />{" "}
                      </span>

                      <span className="text-gray-500">{product.quantity}</span>
                    </p>
                  ))}
                  <p>Subtotal</p>
                  <p>Total</p>
                </div>    
                <div className="flex flex-col items-end w-full">
                  <b className="text-xl">Subtotal</b>
                  {/* subtotals for single product */}
                  {products.map((product, index) => {
                    return (
                      <p key={index}>
                        Rs {Number(product.price) * product.quantity}
                      </p>
                    );
                  })}
                  <p>
                    Rs{" "}
                    {products.reduce(
                      (acc, product) =>
                        acc + Number(product.price) * product.quantity,
                      0
                    )}
                  </p>
                  <p className="text-primaryDark text-2xl font-semibold">
                    Rs{" "}
                    {products.reduce(
                      (acc, product) =>
                        acc + Number(product.price) * product.quantity,
                      0
                    )}
                  </p>
                </div>
              </div>
            )}
            {/* ----------------------------------------------------------------------------------------------------- */}
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
      <ToastContainer />
      <Banner />
    </div>
  );
};

export default Checkout;
