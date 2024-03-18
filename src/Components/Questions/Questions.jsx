import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";
import Aos from "aos";
import "aos/dist/aos.css";
const Questions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [active, setActive] = useState(
    "How do i chose right travel destination for me?"
  );
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid" data-aos="fade-up">
        <div className="accordion grid">
          <Accordion
            title="Can I use your service in multiple locations simultaneously?"
            desc="The number of simultaneous streams allowed depends on your subscription plan. 
                  Please refer to the plan details or contact our support team for more information"
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="How do you protect my privacy and personal information?"
            desc="We take your privacy and security seriously. We employ industry-standard security measures
             to protect your personal information and adhere to strict privacy policies."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="Is it legal to use your streaming service?"
            desc="Yes, our streaming service operates legally and complies
             with all relevant copyright laws and regulations."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="Is your service compatible with my device?"
            desc="Our streaming service is compatible with a wide range of devices, including smartphones, tablets, 
            smart TVs, and gaming consoles. You can find a list of supported devices on our website."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          {/* <Accordion
            title="Do you offer customer support?"
            desc="Yes, we have a dedicated customer support team available to assist you with any questions or issues 
            you may encounter. You can reach out to us through email or live chat support."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          /> */}
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter Email Address"
            />
            <textarea
              data-aos="fade-up"
              placeholder="Enter your question here"
            ></textarea>
            <button className="btn">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
