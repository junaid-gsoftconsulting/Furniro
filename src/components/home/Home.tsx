import BrowseRange from "./BrowseRange";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

export const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <BrowseRange />
      {/* <MasonryGallery /> */}
      <Footer/>
    </div>
  );
};
