import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-3">
        <HomeScreen/>
      </div>
      <Footer />
    </div>
  );
};
export default App;
