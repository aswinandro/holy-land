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
  const [videosPopular, setVideosPopular] = useState([]);

  const channelId = "UC3lzI5dOJIWQ5dl-1cHgylA";
  const apiKey = "AIzaSyDuRTvoyVCQnEjrKYhn-ACX45uX38lqlbI";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=2`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=viewCount&maxResults=2`
        );
        const data = await response.json();
        setVideosPopular(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [channelId, apiKey]);

  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos="fade-up">Latest Events | Live Events | Popular Videos</h3>
      </div>
      <div className="secContainer grid">
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
                  className="iframe-container"
                  allowtransparency="true"
                ></iframe>
                <h4 className="">{video.snippet.title}</h4>
                {/* <p>{video.snippet.description}</p> */}
              </div>
            ))}
          </div>
        </div>

        <div className="accordion grid">
          <div className="youtubeVid">
            {videosPopular.map((video) => (
              <div key={video.id.videoId}>
                <iframe
                  width="100%"
                  height="30%"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allowFullScreen
                  allowTransparency="true"
                ></iframe>
                <h4 className="">{video.snippet.title}</h4>
                {/* <p>{video.snippet.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
