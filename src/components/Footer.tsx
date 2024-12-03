import { Link } from "react-router-dom";
import CustomButton from "./custom/home/CustomButton";

const Footer = () => {
  return (
    <footer className="flex flex-col py-5 bg-gray-50 p-5">
      <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-10 border-t pt-5">
        {/*  Funiro */}
        <div className="flex flex-col w-full md:w-1/3">
          <b className="text-xl text-black font-bold">Funiro.</b>
          <p className="text-sm text-gray-700">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        {/*  Links */}
        <div className="flex flex-col w-full md:w-1/3">
          <b className="text-medium text-black">Links</b>
          <Link to="/" className="text-black text-sm mb-1">
            Home
          </Link>
          <Link to="/shop" className="text-black text-sm mb-1">
            Shop
          </Link>
          <Link to="/blog" className="text-black text-sm mb-1">
            About
          </Link>
          <Link to="/contact" className="text-black text-sm mb-1">
            Contact
          </Link>
        </div>
        {/* Help */}
        <div className="flex flex-col w-full md:w-1/3">
          <b className="text-medium text-black">Help</b>
          <p className="text-sm text-gray-700 mb-1">Payment Options</p>
          <p className="text-sm text-gray-700 mb-1">Returns</p>
          <p className="text-sm text-gray-700 mb-1">Privacy Policies</p>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col w-full md:w-1/3">
          <b className="text-medium text-black">Newsletter</b>
          <div className="flex gap-3 flex-row">
            <input
              type="email"
              className="p-2 border-b border-black bg-transparent"
              placeholder="Enter Your Email Address"
            />
            <CustomButton
              text="SUBSCRIBE"
              className="bg-white text-black border-b border-black mt-2 md:mt-0 md:ml-2 bg-transparent"
            />
          </div>
        </div>
      </div>
      {/* Rights Section */}
      <div className="border-t mt-5 pt-3 text-center text-sm text-gray-600">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
