import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Destinations from "./Components/Destinations/Destinations";
import Portfolio from "./Components/Portfolio/Portfolio";
import Reviews from "./Components/Reviews/Reviews";
import Questions from "./Components/Questions/Questions";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Youtube from "./Components/Youtube/Youtube";
import Livetv from "./Components/Livetv/Livetv";

import { Link, Element } from "react-scroll";
function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <div className="gradient">
        <Middle />
      </div>
      <Element name="livetv">
        <Livetv />
      </Element>

      <Element name="events">
        <Youtube />
      </Element>

      {/* <Element name="destinations">
        <Destinations />
      </Element> */}
      <Element name="reviews">
        <Reviews />
      </Element>
      <Element name="about">
        <Portfolio />
      </Element>

      <Questions />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
