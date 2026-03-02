import React, { useState, useEffect } from "react";
import "./Middle.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Middle = () => {
  const channelId = "UC3lzI5dOJIWQ5dl-1cHgylA";
  const apiKey = "AIzaSyDuRTvoyVCQnEjrKYhn-ACX45uX38lqlbI";

  const [statistics, setStatistics] = useState(null);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const fetchChannelStatistics = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,statistics&id=${channelId}`
        );
        const data = await response.json();
        setStatistics(data.items[0].statistics);
      } catch (error) {
        console.error("Error fetching channel statistics:", error);
      }
    };

    fetchChannelStatistics();
  }, [apiKey, channelId]);

  const formatNumber = (num) => {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1) + "B";
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    }
    return num;
  };
  if (!statistics) {
    return (
      <div className="middle section">
        {/* <div className="secContainer container">
          <div className="grid">
            <span className="flex" data-aos="fade-up">
              <h1>Loading.....</h1>
              <p>Please Wait</p>
            </span>
          </div>
        </div> */}
      </div>
    );
  }
  return (
    <div data-aos="zoom-in" className="middle section">
      <div className="secContainer container">
        <div className="grid">
          <span className="flex" data-aos="fade-up">
            <h1>{formatNumber(statistics.subscriberCount)}</h1>
            <p>Subscriber Count</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>2K+</h1>
            <p>Churches and Events</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>{formatNumber(statistics.videoCount)}</h1>
            <p>Video Content</p>
          </span>
          <span className="flex" data-aos="fade-up">
            <h1>{formatNumber(statistics.viewCount)}</h1>
            <p>Overall Views</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;
