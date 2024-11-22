import CustomHeading from "../custom/home/CustomHeading";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "/assets/hero/masonary-gallery/Rectangle 40.svg";
import img2 from "/assets/hero/masonary-gallery/Rectangle 43.svg";
import img3 from "/assets/hero/masonary-gallery/Rectangle 37.svg";
import img4 from "/assets/hero/masonary-gallery/Rectangle 38.svg";
import img5 from "/assets/hero/masonary-gallery/Rectangle 39.svg";
import img6 from "/assets/hero/masonary-gallery/Rectangle 41.svg";
import img7 from "/assets/hero/masonary-gallery/Rectangle 43.svg";
import img8 from "/assets/hero/masonary-gallery/Rectangle 44.svg";
import img9 from "/assets/hero/masonary-gallery/Rectangle 45.svg";


export const MasonryGallery = () => {
  return (
    <div className="flex flex-col">
      <CustomHeading
        heading="#FuniroFurniture"
        upperdesc="Share your setup with"
      />
      <div className="my-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={4} gutter="16px">
            <img
              src={img1}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
            <img
              src={img2}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
            <img
              src={img3}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
            <img
              src={img4}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
            <img
              src={img5}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
             <img
              src={img6}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
             <img
              src={img7}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
             <img
              src={img8}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
             <img
              src={img9}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
              <img
              src={img6}
              alt=""
              className="w-full h-auto object-cover mb-4"
            />
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};
