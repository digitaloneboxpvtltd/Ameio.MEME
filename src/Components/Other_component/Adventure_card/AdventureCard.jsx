import "./AdventureCard.css";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";


export default function AdventureCard(props){

    // const cardStyle = {   
    //     backgroundImage: `url(${props.imgPath})`,
    //     backgroundSize: 'cover', 
    //     backgroundPosition: 'center',
    // };

    return(
        <div className="adventure_Card_container">
            <div className="card_info_contaner">
                {/* <p className="card_userName">{props.userName}</p>
                <p className="card_userInfo">{props.userInfo}</p> */}

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
            {props.imgPath.map((path, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img loading="lazy" src={path} alt="" />
                    </SwiperSlide>
                );
            })}; 
             
            </Swiper>
            </div>

            <div className="card_follower_container">
                <i className="fa-solid fa-fire"></i>
                <p>{props.userName}</p>
            </div>
        </div>
    )
}