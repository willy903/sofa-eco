import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/Navbar';
import Shop from './pages/Shop';
import Support from './pages/Support';
import Product from './pages/product';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (

      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='product' element={<Product/>} >
            <Route path=':productId/' element={<Product/>} />
          </Route>
          <Route path='cart' element={<Cart/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>


  );
}

export default App;
