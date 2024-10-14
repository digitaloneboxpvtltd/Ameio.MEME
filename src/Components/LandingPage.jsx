import "./LandingPage.css";
import animal_landing from "../Assets/Images/animal_landing_img.webp";
import useIntersectionObserver from "./InterSection_observer";
export default function LandingPage(){
    const ref = useIntersectionObserver({
        threshold: 0.1,
      });

      
    return(
        <div ref ={ref} className="LandingPage_container hidden">
            <img loading="lazy" ref ={ref} src={animal_landing} alt="" />
            <div className="Landing_page_bg_container">

            </div>
        </div>
    )
}