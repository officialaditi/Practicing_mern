import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductScreen from "./Screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-18 py-6 px-6 flex flex-col">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
