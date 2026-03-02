import React, { useEffect } from "react";
import "./Payment.css";
import icon1 from "../../assets/donation.png";
import icon2 from "../../assets/donation (1).png";
import icon3 from "../../assets/chat.svg";
import image from "../../assets/upiqr.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { LiaDonateSolid } from "react-icons/lia";

const Payment = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="payment section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Pay | Donate</h3>
            <p data-aos="fade-up">
              Please click on the image or Scan using QR Reader
            </p>
          </div>
          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="No Img found" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Pay or Donate</h4>
                <p>
                  The streaming service's ability to provide high-quality video
                  and audio streaming, are by your donations and payment for our
                  services
                </p>
              </div>
            </div>
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="No Img found" />
              </div>
              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Donation for the Needy</h4>
                <p>
                  You can Donate for Church building, Cancer Patients with
                  legitimate one to one meet through us on your special
                  occasions.
                </p>
              </div>
            </div>
            {/* <div className="singlePortfolio flex" data-aos="fade-up">
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
            </div> */}
          </div>
        </div>
        <div className="rightContent" data-aos="fade-down">
          {/* <div className="secHeading">
            <h3 data-aos="fade-up">Pay or Donate</h3>
            <p data-aos="fade-up">
              Please click on the image or Scan using QR Reader
            </p>
          </div> */}
          <a href="upi://pay?pa=joseshalom1983@okaxis&pn=HOLY%20LAND%20TV&aid=uGICAgICjtKyvWw">
            <img className="upi" src={image} alt="Icon Image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
