import React, { useEffect } from "react";
import "./Portfolio.css";
import icon1 from "../../assets/destination.svg";
import icon2 from "../../assets/protect.svg";
import icon3 from "../../assets/chat.svg";
import image from "../../assets/studio2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Chose Us</h3>
            <p data-aos="fade-up">
              We have extensive knowledge and experience in streaming industry
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="No Img found" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Quality and Resolution</h4>
                <p>
                  The streaming service's ability to provide high-quality video
                  and audio streaming, including options for 4K and HDR content,
                  can be appealing to users who prioritize viewing experience.
                </p>
              </div>
            </div>
            {/* <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="No Img found" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Diverse Range of Destination</h4>
                <p>
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
                </p>
              </div>
            </div> */}
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="No Img found" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available round the
                  clock to address any queries or concerns Responsive customer
                  support and assistance in resolving issues.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="Icon Image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
