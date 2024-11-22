import BrowseRange from "./BrowseRange";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Slider from "./Slider";
import { MasonryGallery } from "./MasonryGallery";

export const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <BrowseRange />
      <Slider/>
      <MasonryGallery />

      <Footer/>
    </div>
  );
};
