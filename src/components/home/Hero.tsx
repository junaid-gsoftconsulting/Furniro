import hero from "/assets/hero/hero-bg.svg";
import CustomButton from "../custom/home/CustomButton";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-cover h-[35.5rem] bg-center flex justify-end items-center p-8 "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="bg-primary flex flex-col p-5 gap-2">
        <p className="">New Arrival</p>
        <p className="text-4xl font-semibold max-w-[100%] md:max-w-[50%] text-primaryDark">
          Discover Our New Collection
        </p>
        <p className="max-w-[95%] md:max-w-[90%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="">
          <CustomButton
            text="Buy Now"
            className="text-white"
            onClick={() => navigate("/shop")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
