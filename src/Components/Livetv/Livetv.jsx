import React, { useState, useEffect } from "react";
import "./Livetv.css";
import calling from "../../assets/subscribe.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import ReactPlayer from "react-player";

const Livetv = () => {
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSubscription = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
      const API_KEY = "AIzaSyDuRTvoyVCQnEjrKYhn-ACX45uX38lqlbI";
      const channelId = "UC3lzI5dOJIWQ5dl-1cHgylA";

      const response = await axios.post(
        `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet`,
        {
          snippet: {
            resourceId: {
              kind: "youtube#channel",
              channelId: channelId,
            },
          },
        },
        {
          params: {
            key: API_KEY,
          },
          headers: {
            Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        setSubscribed(true);
        console.log("Subscribed successfully!");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };
  return (
    <div className="liveTv section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Live Television </h3>
      </div>
      <div data-aos="zoom-in" className="secContainer grid">
        <div className="videoLive">
          <ReactPlayer
            autoPlay={true}
            playing={true}
            muted={true}
            controls={true}
            playsinline={true}
            height="100%"
            width="100%"
            url="https://play.applelive.in/holylandtv/holylandtv.m3u8"
          />
        </div>
      </div>
    </div>
  );
};

export default Livetv;
