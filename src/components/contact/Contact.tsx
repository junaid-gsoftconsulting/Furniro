import BreadcrumCard from "../custom/shop/BreadcrumCard";
import Banner from "../custom/shop/Banner";
import CustomContactInfo from "./CustomContactInfo";
import location from "../../../public/assets/contact/location.svg";
import phone from "../../../public/assets/contact/phone.svg";
import time from "../../../public/assets/contact/time.svg";
import CustomInput from "../checkout/CustomInput";
import CustomButton from "../custom/home/CustomButton";

const Contact = () => {
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
          <div className="flex flex-col gap-3">
            <CustomInput
              name="Your name"
              type="text"
              placeholder="Abc"
              className="border-gray-400"
            />
            <CustomInput
              name="Email address"
              type="email"
              placeholder="Abc@def.com"
              className="border-gray-400"
            />
            <CustomInput
              name="Subject"
              type="text"
              placeholder="This is an optional"
              className="border-gray-400"
            />
            <div className="flex flex-col">
              <label htmlFor="">Message</label>
              <textarea rows={3} className="border border-gray-400 rounded-lg p-2" placeholder="Hi! i’d like to ask about"/>
            </div>
           <div className="">
           <CustomButton text="Submit" className="rounded-lg w-48"/>
           </div>
          </div>
        </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Contact;
