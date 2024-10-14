

import facebook_icon from "../Assets/Icons/socialMedia_icon/facebook_icon_0.png";
import insta_icon from "../Assets/Icons/socialMedia_icon/insta_icon_0.png";
import twitter_icon from "../Assets/Icons/socialMedia_icon/twitter_icon_0.png";
import youtube_icon from "../Assets/Icons/socialMedia_icon/youtube_icon_0.png";
import mail_icon from "../Assets/Icons/socialMedia_icon/mail_icon_0.png";
import telegram_icon from "../Assets/Icons/socialMedia_icon/telegram_icon_0.png";
// import fox_img from "../Assets/Images/Baby_fox.webp";

// crousel imports
import about_img0 from "../Assets/Images/about_img_0.webp";
import about_img1 from "../Assets/Images/about_img_1.webp";
import about_img2 from "../Assets/Images/about_img_2.webp";
import about_img3 from "../Assets/Images/about_img_3.webp";
import about_img4 from "../Assets/Images/about_img_4.webp";

// why invest img
import ecosystem from "../Assets/Images/why_invest_img/ecosystem1.webp";
import grouth from "../Assets/Images/why_invest_img/grouth1.webp";
import benefit from "../Assets/Images/why_invest_img/benefit1.webp";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FeaturedSection.css";

// import required modules
import { Autoplay } from "swiper/modules";
import useIntersectionObserver from "./InterSection_observer";

export default function FeaturedSection() {
  const ref1 = useIntersectionObserver({
    threshold: 0.1,
  });
  const ref2 = useIntersectionObserver({
    threshold: 0.1,
  });
  const ref3 = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div className="Featured_Section_container">
      <div className="main_container">
        <h1>About Amieo</h1>
        {/* <div className="featured_Head">
                    <h1>Featured In</h1>
                    
                    <div className="featured_slider_container">
                        <div className="featured_companies">
                            <img loading="lazy"  src={feature_img1} alt="" />
                            <img loading="lazy"  src={feature_img2} alt="" />
                            <img loading="lazy"  src={feature_img3} alt="" />
                            <img loading="lazy"  src={feature_img4} alt="" />
                            <img loading="lazy"  src={feature_img5} alt="" />
                            <img loading="lazy"  src={feature_img6} alt="" />

                            <img loading="lazy"  src={feature_img1} alt="" />
                            <img loading="lazy"  src={feature_img2} alt="" />
                            <img loading="lazy"  src={feature_img3} alt="" />
                            <img loading="lazy"  src={feature_img4} alt="" />
                            <img loading="lazy"  src={feature_img5} alt="" />
                            <img loading="lazy"  src={feature_img6} alt="" />
                        </div>
                    </div>        
                </div> */}

        {/* about ameio.meme */}
        <div className="featured_info_container">
          <div className="featured_info">
            <p>
              AMEIO MEME is a groundbreaking project that brings together the
              worlds of gaming, NFT memes, and the metaverse to create a
              vibrant, dynamic ecosystem.
            </p>
            <div className="social_media_icons">
              <a href="mailto:ameiomeme@gmail.com">
                <img loading="lazy"  src={mail_icon} alt="" />
              </a>
              <a href="https://x.com/ameio_meme">
                <img loading="lazy"  src={twitter_icon} alt="" />
              </a>
              <a href="https://t.me/ameio_memecommunity">
                <img loading="lazy"  src={telegram_icon} alt="" />
              </a>
              <a href="https://www.facebook.com/ameiomeme/">
                <img loading="lazy"  src={facebook_icon} alt="" />
              </a>
              <a href="https://www.instagram.com/ameio_meme/">
                <img loading="lazy"  src={insta_icon} alt="" />
              </a>
              <a href="https://www.youtube.com/@Ameio_Meme">
                <img loading="lazy"  src={youtube_icon} alt="" />
              </a>
            </div>
          </div>

          <div className="about_img_scroler_container">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img loading="lazy"  src={about_img0} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy"  src={about_img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy"  src={about_img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy"  src={about_img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy"  src={about_img4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>




        {/* why choice us section */}

        <div className="why_info_container mb-[4rem]" id="WhyAmeio_Section">
          <h1 className="mb-[3rem]">Why Invest in Ameio Meme?</h1>

          <div className="why_info">
            <ul>
              <li ref={ref1} className="hidden transform_other_side">
              <img src={ecosystem} alt="" loading="lazy"/>
                <p>
                  <strong>Innovative Ecosystem</strong> <br />Combining the best of
                  gaming, NFTs, and the metaverse, AMEIO MEME offers a unique
                  platform that empowers creators and rewards community
                  participation.
                </p>
              </li>

              <li ref={ref2} className="hidden transform_side">
              <img src={grouth} alt="" loading="lazy"/>

                <p>
                  <strong>High Growth Potential</strong> <br /> With a projected
                  10000X increase in token value within the first year, AMEIO
                  MEME presents a promising investment opportunity.
                </p>
              </li>

              <li ref={ref3} className="hidden transform_other_side">
              <img src={benefit} alt="" loading="lazy" />

                <p>
                  <strong>Early Bird Benefits</strong> <br /> Join our presale to
                  enjoy exclusive airdrop benefits and get in at the ground
                  floor of a groundbreaking project.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* combination meme section */}

        {/* <div className="meme_container">
                    <h1>Combination of Various Meme </h1>
                    <img loading="lazy"  src={meme_img} alt="" className="meme_img" />
                    <img loading="lazy"  src={meme_fox} alt="" className="meme_cat_img"/>
                </div> */}
      </div>
    </div>
  );
}
