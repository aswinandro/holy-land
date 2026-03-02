import React, { useState } from "react";
import "./Navbar.css";
import { SiHumblebundle } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link, Element } from "react-scroll";
const Navbar = () => {
  const [navBar, SetNavBar] = useState("menu");

  const showNavBar = () => {
    SetNavBar("menu showNavbar");
  };

  const removeNavBar = () => {
    SetNavBar("menu");
  };

  return (
    <div className="blurNav">
      <div className="navBar">
        <div className="logoDiv">
          <SiHumblebundle className="icon" />
          <span>oly Land Television</span>
        </div>

        <div className={navBar}>
          <ul>
            <li className="navList">
              <Link to="home" smooth={true} duration={400}>
                Home
              </Link>
            </li>
            <li className="navList">
              <Link to="livetv" smooth={true} duration={400}>
                Live TV
              </Link>
            </li>
            <li className="navList">
              <Link to="about" smooth={true} duration={400}>
                About Us
              </Link>
            </li>
            <li className="navList">
              <Link to="reviews" smooth={true} duration={400}>
                Testimonial
              </Link>
            </li>
            <li className="navList">
              <Link to="events" smooth={true} duration={400}>
                Events
              </Link>
            </li>
            <li className="navList">
              <Link to="payment" smooth={true} duration={400}>
                Pay
              </Link>
            </li>
          </ul>
          <AiFillCloseCircle
            className="icon closeIcon"
            onClick={removeNavBar}
          />
        </div>
        <button className="signUpBtn btn">Sign Up</button>
        <PiDotsNineBold className="icon" onClick={showNavBar} />
      </div>
    </div>
  );
};

export default Navbar;
