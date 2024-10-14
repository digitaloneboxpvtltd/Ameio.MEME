import "./Metaverse.css";
import main_v from "../Assets/Images/metaverse_assets/main_video.webp";
import other_v2 from "../Assets/Images/metaverse_assets/other_video2.gif";
import other_v3 from "../Assets/Images/metaverse_assets/other_video3.gif";
import other_v4 from "../Assets/Images/metaverse_assets/other_video4.gif";
import other_v5 from "../Assets/Images/metaverse_assets/other_video5.gif";
import other_v6 from "../Assets/Images/metaverse_assets/other_video6.gif";
import other_v7 from "../Assets/Images/metaverse_assets/other_video7.gif";

import main_img from "../Assets/Images/metaverse_assets/main_img.webp";
import other_img2 from "../Assets/Images/metaverse_assets/other_img2.png";
import other_img3 from "../Assets/Images/metaverse_assets/other_img3.png";
import other_img4 from "../Assets/Images/metaverse_assets/other_img4.png";
import other_img5 from "../Assets/Images/metaverse_assets/other_img5.png";
import other_img6 from "../Assets/Images/metaverse_assets/other_img6.png";
import other_img7 from "../Assets/Images/metaverse_assets/other_img7.png";

import { useState } from "react";

export default function Metaverse() {
  const [hoveredSrc, setHoveredSrc] = useState(null);

  const handleMouseOver = (event) => {
    const newSrc = event.target.getAttribute("hover_data");
    let old_val = event.target.getAttribute("src");
    event.target.setAttribute("src", newSrc);
    setHoveredSrc(old_val);
  };

  const handleMouseOut = (event) => {
    event.target.setAttribute("src", hoveredSrc);
  };

  return (
    <div className="metaverse_section_container">
      <h1>Enter the Ameio Metaverse</h1>
      <p>
        AMEIO.Meme introduces the concept of a "Metaverse on Meme," merging
        virtual reality (VR) and augmented reality (AR) technologies with meme
        culture.
      </p>

      <div className="metaverse_body">
        <div className="other_video_contaner1">
          <div className="gif_container">
            <img loading="lazy"
              src={other_img2}
              alt=""
              className="metaverseImg"
              hover_data={other_v2}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>LalaVerse</p> <p className="video_info">1.4ETH</p>
            </div>
          </div>
          <div className="gif_container">
            <img loading="lazy"
              src={other_img3}
              alt=""
              className="metaverseImg"
              hover_data={other_v3}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Somnium</p> <p className="video_info">1.4ETH</p>
            </div>
          </div>
          
          <div className="gif_container">
            <img loading="lazy"
              src={other_img4}
              alt=""
              className="metaverseImg"
              hover_data={other_v4}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Roblox</p> <p className="video_info">2.5ETH</p>
            </div>
          </div>
        </div>

        <div className="main_video_container">
          <div className="gif_container">
            <img loading="lazy"
              src={main_img}
              alt=""
              className="metaverseImg"
              hover_data={main_v}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Decentraland</p> <p className="video_info">3.5ETH</p>
            </div>
          </div>
        </div>

        <div className="other_video_contaner2">
          <div className="gif_container">
            <img loading="lazy"
              src={other_img5}
              alt=""
              className="metaverseImg"
              hover_data={other_v5}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Geek Metaverse</p> <p className="video_info">1.8ETH</p>
            </div>
          </div>
          <div className="gif_container">
            <img loading="lazy"
              src={other_img6}
              alt=""
              className="metaverseImg"
              hover_data={other_v6}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Illuvium</p> <p className="video_info">1.1ETH</p>
            </div>
          </div>
          <div className="gif_container">
            <img loading="lazy"
              src={other_img7}
              alt=""
              className="metaverseImg"
              hover_data={other_v7}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            <div className="video_info_container">
              <p>Fortenite</p> <p className="video_info">2.5ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
