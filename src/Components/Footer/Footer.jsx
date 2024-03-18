import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { SiHumblebundle } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <SiHumblebundle className="icon" />
            <span>oly Land </span>
          </div>
          <div className="socials flex">
            <a href="https://www.facebook.com/HolyLandTV.in">
              <FaFacebookF className="icon" />{" "}
            </a>
            <a href="https://twitter.com/HolyLandTV_in">
              <BsTwitter className="icon" />{" "}
            </a>
            <a href="https://www.instagram.com/HolyLandTV.in">
              <AiFillInstagram className="icon" />{" "}
            </a>
          </div>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos="fade-up">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">Mob +91 9444773063</span>
          <span className="email">holylandtv.klm@gmail.com</span>
          <span className="email">Pastor Jose </span>
          <span className="email">Themaanoor, Kannyakumari</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
