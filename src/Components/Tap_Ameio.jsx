import landing from "../Assets/Images/Tap_feature_img/landing2.webp";
import tap1_img from "../Assets/Images/Tap_feature_img/Tap2.webp";
import tap2_img from "../Assets/Images/Tap_feature_img/task2.webp";
import tap3_img from "../Assets/Images/Tap_feature_img/share_balance.webp";
import tap4_img from "../Assets/Images/Tap_feature_img/Referral2.webp";
import tap5_img from "../Assets/Images/Tap_feature_img/Boost2.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Tap_Ameio.css";

import useIntersectionObserver from "./InterSection_observer";


export default function TapAmeio() {

    const ref1 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref2 = useIntersectionObserver({
        threshold: 0.1,
      });

  return (
    <div className="Tap_section_container" id="AmeioTap_Section">
      <div className="Tap_head_container">
        <h1>Upcoming Ameio Tap</h1>
        <p>
          Immerse yourself in the ultimate gaming experience on Ameio.io. Enjoy
          fast, secure gameplay with top-notch graphics and seamless
          performance, ensuring maximum player satisfaction and continuous
          engagement in every session
        </p>
      </div>

      <div className="main_mobile_container">
        <div ref={ref1} className="Mfraim mobile_fraim1 transform_side">
          <div>
            <img src={landing} alt="home tab" />{" "}
          </div>
        </div>

        <div ref={ref2} className="Mfraim mobile_fraim2 transform_side">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
              <img src={tap1_img} alt="first tab" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={tap2_img} alt="first tab" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={tap3_img} alt="first tab" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={tap4_img} alt="first tab" />
              </SwiperSlide>
              <SwiperSlide>
              <img src={tap5_img} alt="first tab" />
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
}
