import React, { useState, useEffect } from "react";
import "./Youtube.css";
import Accordion from "./Accordion";
import Aos from "aos";
import "aos/dist/aos.css";
const Youtube = () => {
  const [active, setActive] = useState(
    "How do i chose right travel destination for me?"
  );

  const [videos, setVideos] = useState([]);

  const channelId = "UCwurrqxg96IiccBL_J2p1-A";
  const apiKey = "AIzaSyDuRTvoyVCQnEjrKYhn-ACX45uX38lqlbI";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [channelId, apiKey]);

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Latest Events | Live Events</h3>
      </div>
      <div className="secContainer grid" data-aos="fade-up">
        <div className="accordion grid">
          <div className="youtubeVid">
            {videos.map((video) => (
              <div key={video.id.videoId}>
                <iframe
                  width="100%"
                  height="30%"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <h4 className="">{video.snippet.title}</h4>
                {/* <p>{video.snippet.description}</p> */}
              </div>
            ))}
          </div>
          <Accordion
            title="How to find my destination"
            desc="Consider your interests, budget, desired experiences, and the type of
          environment, Research destinations that align with your preferences"
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="How can i find budget friendly travel options and deals?"
            desc="Look for travel deals, discounts on flights and accomodations, and
            consider using travel apps or websites that offer competitive prices. Being
            flexible with your travel dates can also help you find better deals"
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="Best times to visit specific destination?"
            desc="Look for travel deals, discounts on flights and accomodations, and
            consider using travel apps or websites that offer competitive prices. Being
            flexible with your travel dates can also help you find better deals"
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
          <Accordion
            title="Can I make changes to or cancel my booking?"
            desc="The ability to make changes or cancel your booking depends on the terms and conditions of the service provider you booked with. 
            Some bookings may be non-refundable or subject to fees for changes. We recommend reviewing the specific policies outlined at the time of 
            booking or contacting our customer support for assistance."
            active={active}
            setActive={setActive}
            data-aos="fade-up"
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Popular Videos</h4>
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

export default Youtube;
