import React, { useEffect } from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";
import rev1 from "../../assets/rev (1).jpg";
import rev2 from "../../assets/rev (2).jpg";
import rev3 from "../../assets/rev (3).jpg";
import rev4 from "../../assets/rev (4).jpg";
import cust from "../../assets/happycustomer.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="imgDiv" data-aos="fade-down">
          <img src={cust} alt="div image" />
        </div>
        <div className="textDiv">
          {/* <span className="redText" data-aos="fade-up">
            HolyLand TV
          </span> */}
          <h3 data-aos="fade-up">About Us</h3>
          <p data-aos="fade-up">
            Holy Land TV is a non-profit, non-denominational Christian digital
            media channel. Holy Land TV broadcasts its content mainly in Tamil &
            Malayalam language. We offer High-quality Live streaming Solutions
            to the general public that includes Church Programs Live Streams,
            Wedding Live Stream, Funeral Live Stream, Institutional Program Live
            Stream, etc. We are well equipped with the latest technology-enabled
            network and devices to stream your favorite content. Good News to
            Ends of the Earth.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>

          <div className="clientsImages flex">
            <img src={rev1} alt="Client Image" data-aos="fade-up" />
            <img src={rev2} alt="Client Image" data-aos="fade-up" />
            <img src={rev3} alt="Client Image" data-aos="fade-up" />
            <img src={rev4} alt="Client Image" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
