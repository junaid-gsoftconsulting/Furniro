import { Home } from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import SingleProduct from "./components/product/SingleProductCard";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

const App = () => {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/shop/:id" element={<SingleProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
