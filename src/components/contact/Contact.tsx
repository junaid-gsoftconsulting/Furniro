import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import CustomContactInfo from "./CustomContactInfo";
import location from "../../../public/assets/contact/location.svg";
import phone from "../../../public/assets/contact/phone.svg";
import time from "../../../public/assets/contact/time.svg";
import CustomInput from "../checkout/CustomInput";
import CustomButton from "../custom/home/CustomButton";
import { Controller, FieldError, useForm } from "react-hook-form";
import { ContactValidation } from "../utils/ContactValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(ContactValidation),
  });

  const submitHandler = (data: unknown) => {
    console.log(data);
    if (!isSubmitting) {
      setIsSubmitting(true);
      toast.success("Your form has been submitted successfully!");

      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col">
      <BreadcrumCard />
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2 my-5 md:my-10">
          <b className="text-2xl">Get In Touch With Us</b>
          <p className="max-w-xl text-center text-gray-400 px-4">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        {/* grid */}
        <div className="flex justify-center items-center w-full my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32 justify-between">
            {/* left */}
            <div className="flex flex-col gap-3">
              <CustomContactInfo
                heading="Address"
                description="236 5th SE Avenue, New York NY10000, United States"
                icon={location}
              />
              <CustomContactInfo
                heading="Phone"
                description="Mobile: +(84) 546-6789
              Hotline: +(84) 456-6789"
                icon={phone}
              />
              <CustomContactInfo
                heading="Working Time"
                description="Monday-Friday: 9:00 - 22:00
              Saturday-Sunday: 9:00 - 21:00"
                icon={time}
              />
            </div>
            {/* right */}
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(submitHandler)}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <CustomInput
                      name="Your name"
                      type="text"
                      placeholder="Abc"
                      className="border-gray-400"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {(errors.name as FieldError).message}
                      </span>
                    )}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <CustomInput
                      name="Email address"
                      type="email"
                      placeholder="Abc@def.com"
                      className="border-gray-400"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {(errors.email as FieldError).message}
                      </span>
                    )}
                  </div>
                )}
              />
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <CustomInput
                      name="Subject"
                      type="text"
                      placeholder="This is an optional"
                      className="border-gray-400"
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.subject && (
                      <span className="text-red-500 text-sm">
                        {(errors.subject as FieldError).message}
                      </span>
                    )}
                  </div>
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-col">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      {...field}
                      rows={3}
                      className="border border-gray-400 rounded-lg p-2"
                      placeholder="Hi! I’d like to ask about"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">
                        {(errors.message as FieldError).message}
                      </span>
                    )}
                  </div>
                )}
              />

              <div className="flex justify-center">
                <CustomButton
                  text="Submit"
                  className="rounded-lg w-48"
                  onClick={() => submitHandler}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Banner />
    </div>
  );
};

export default Contact;
