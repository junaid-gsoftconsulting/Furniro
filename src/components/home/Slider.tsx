import { useState } from "react";
import CustomButton from "../custom/home/CustomButton";
import CustomSliderCard from "../custom/home/CustomSliderCard";
import data from "../data.json";
import sliderPic from "../../../public/assets/hero/carousel/swiperPic.svg";
import sliderPic2 from "../../../public/assets/hero/carousel/Rectangle24.svg";
import sliderPic3 from "../../../public/assets/hero/carousel/Rectangle25.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.homeSlider.length);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-primary items-stretch md:h-[70vh] my-5">
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

        <div className="basis-full md:basis-1/3 flex w-full my-3 md:my-0">
          <CustomSliderCard
            sliderData={data.homeSlider[currentIndex]}
            nextSlide={nextSlide}
          />
        </div>
        {/* {data.homeSlider[currentIndex]((homeData, index) => {
          return (
            <div className="basis-full md:basis-1/3 flex w-full" key={index}>
              <CustomSliderCard sliderData={homeData} />
            </div>
          );
        })} */}
        {/* 3 */}
        <div className="basis-full md:basis-1/3 overflow-hidden">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            height={30}
            className="h-96 w-full"
            width={100}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img src={sliderPic} alt="swiper" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderPic2} alt="swiper" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderPic3} alt="swiper" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
