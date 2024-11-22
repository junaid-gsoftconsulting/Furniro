import BrowseRange from "./BrowseRange";
import Hero from "./Hero";
import Slider from "./Slider";
import { MasonryGallery } from "./MasonryGallery";

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <BrowseRange />
      <Slider/>
      <MasonryGallery />
    </div>
  );
};
