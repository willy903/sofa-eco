import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navBar/Navbar";
import Product from "./pages/product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import SignleProduct from "./pages/SignleProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="signleproduct" element={<SignleProduct />}>
          <Route path=":productId/" element={<SignleProduct />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="loginsignup" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
