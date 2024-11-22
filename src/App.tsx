import { Home } from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";

const App = () => {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
