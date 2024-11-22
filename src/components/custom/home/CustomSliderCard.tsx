import arrow from "/assets/hero/icons/arrowforward.svg";
interface CustomSliderCardProps {
  sliderData: {
    number: string;
    place: string;
    heading: string;
    image: string;
  };
}

const CustomSliderCard = ({ sliderData }: CustomSliderCardProps) => {
  // const imageUrl = new URL(sliderData.image, import.meta.url).href;

  return (
    <div
      className="flex flex-col justify-between w-full bg-cover"
      style={{ backgroundImage: `url(${sliderData.image})` }}
    >
      <div className="flex justify-center items-end h-full">
        <div
          className="p-4 flex flex-col backdrop-blur-lg  "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
          }}
        >
          <span>
            {sliderData.number} {"---"} {sliderData.place}
          </span>
          <p>{sliderData.heading}</p>
        </div>
        <div className="flex pt-10">
          <button className="bg-primaryDark rounded-none text-white p-2">
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSliderCard;
