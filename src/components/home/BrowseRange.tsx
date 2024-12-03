import CustomHeading from "../custom/home/CustomHeading";
import BrowseRangeCard from "../custom/home/BrowseRangeCard";
import dining from "/assets/hero/dining.svg";
import living from "/assets/hero/living.svg";
import bedroom from "/assets/hero/bedroom.svg";

const BrowseRange = () => {
  return (
    <div className="flex flex-col my-7 ">
    <div className="mb-8 px-3">
    <CustomHeading
        heading="Browse The Range"
        lowerdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 m-5 md:m-0 mt-5">
        <BrowseRangeCard heading="Dining" image={dining} />
        <BrowseRangeCard heading="Living" image={living} />
        <BrowseRangeCard heading="Bedroom" image={bedroom} />
      </div>
    </div>
  );
};

export default BrowseRange;
