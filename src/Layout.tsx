import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
