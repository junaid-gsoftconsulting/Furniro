import { useState } from "react";
import image1 from "../../../public/assets/products/desc-tabs/Group107.svg";
import image2 from "../../../public/assets/products/desc-tabs/Group106.svg";

const DescriptionTabs = () => {
  const [description, setDescription] = useState(true);
  const [info, setInfo] = useState(false);
  const [reviews, setReviews] = useState(false);

  const descHandler = () => {
    setDescription(true);
    setInfo(false);
    setReviews(false);
  };
  const infoHandler = () => {
    setInfo(true);
    setDescription(false);
    setReviews(false);
  };
  const reviewsHandler = () => {
    setReviews(true);
    setDescription(false);
    setInfo(false);
  };
  return (
    <div className="flex flex-col gap-5 my-5">
      <div className="flex flex-col md:flex-row text-center justify-center text-xl gap-2 md:gap-8">
        <b
          className={`cursor-pointer ${
            description ? "text-black" : "text-gray-400"
          }`}
          onClick={descHandler}
        >
          Description
        </b>
        <b
          className={`cursor-pointer ${
            info ? "text-black" : "text-gray-400"
          }`}
          onClick={infoHandler}
        >
          Additional Information
        </b>
        <b
          className={`cursor-pointer ${
            reviews ? "text-black" : "text-gray-400"
          }`}
          onClick={reviewsHandler}
        >
          Reviews
        </b>
      </div>
      <div className="flex">
        {description && (
          <div className="flex justify-center items-center ">
            <div className="flex flex-col gap-3 max-w-[80%]">
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <img src={image1} alt="desctabs" className="overflow-hidden" />
                <img src={image2} alt="desctabs" className="overflow-hidden" />
              </div>
            </div>
          </div>
        )}
        {info && (
          <div className="flex justify-center items-center ">
            <div className="flex max-w-[80%]">
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
        )}
        {reviews && (
          <div className="flex justify-center items-center ">
            <div className="flex max-w-[80%]">
              <p>
                Stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionTabs;
