import React, { useState, useEffect } from "react";
import "./Subscribe.css";
import calling from "../../assets/subscribe.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Subscribe = () => {
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
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img data-aos="fade-down" src={calling} alt="Div Image" />
        <div className="textDiv">
          <h4 data-aos="fade-up">Best way to start your journey</h4>
          <p>
            We offer personalised streaming services to individual preferences
            and interests
          </p>
          {/* <div>
            {subscribed ? (
              <p>You are subscribed!</p>
            ) : (
              <button onClick={handleSubscription}>
                Subscribe to YouTube Channel
              </button>
            )}
          </div> */}
          <button data-aos="fade-up" className="btn">
            <a href="https://www.youtube.com/@HolyLandTV">Start Here</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
