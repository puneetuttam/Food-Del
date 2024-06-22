import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from './pages/Cart/Cart.jsx'
import Home from './pages/Home/Home.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
