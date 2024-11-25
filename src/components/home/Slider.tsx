import { useState } from "react";
import CustomButton from "../custom/home/CustomButton";
import CustomSliderCard from "../custom/home/CustomSliderCard";
import data from "../data.json";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.homeSlider.length);
  };

  return (
    <>
      <div className="flex bg-primary items-stretch h-[70vh]">
        {/* 1 */}
        <div className="basis-full md:basis-1/3 flex flex-col gap-2 p-6">
          <p className="text-3xl font-bold">50+ Beautiful rooms inspiration</p>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="">
            <CustomButton text="Explore More" />
          </div>
        </div>
        {/* 2 */}

        <div className="basis-full md:basis-1/3 flex w-full">
        <CustomSliderCard sliderData={data.homeSlider[currentIndex]} nextSlide={nextSlide}/>
      </div>
        {/* {data.homeSlider[currentIndex]((homeData, index) => {
          return (
            <div className="basis-full md:basis-1/3 flex w-full" key={index}>
              <CustomSliderCard sliderData={homeData} />
            </div>
          );
        })} */}
        {/* 3 */}
        <div className="basis-full md:basis-1/3"></div>
      </div>
    </>
  );
};

export default Slider;
