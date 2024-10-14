
import "./Partners.css";
import logo1 from "../Assets/Icons/partners_logo/Ave1.svg";
import logo2 from "../Assets/Icons/partners_logo/CoinGecko1.svg";
import logo3 from "../Assets/Icons/partners_logo/coinmarketcap.svg";
import logo4 from "../Assets/Icons/partners_logo/dextool.svg";
import logo5 from "../Assets/Icons/partners_logo/dexview.svg";
import logo6 from "../Assets/Icons/partners_logo/pinksale_logo1.svg";
import logo7 from "../Assets/Icons/partners_logo/solescan.svg";
import logo8 from "../Assets/Icons/partners_logo/Raydium1.svg";
import logo9 from "../Assets/Icons/partners_logo/dexscreener.svg";
import useIntersectionObserver from "./InterSection_observer";

export default function Partners(){

    const ref1 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref2 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref3 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref4 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref5 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref6 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref7 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref8 = useIntersectionObserver({
        threshold: 0.1,
      });
      const ref9 = useIntersectionObserver({
        threshold: 0.1,
      });


    return(
        <div className="partners_section_container" id="Partner_Section">
            <div className="partners_head_container">
                <h1>Our Partners</h1>
                <p>Partner with Ameio.io: Innovate seamlessly, maximize efficiency, and drive exceptional growth together</p>
            </div>

            <div className="partner_boxes_container">

                <div ref={ref1}className="partners_box hidden">
                    <img src={logo1} alt="" />
                </div>

                <div ref={ref2}className="partners_box hidden">
                    <img src={logo2} alt="" />
                </div>

                <div ref={ref3}className="partners_box hidden">
                    <img src={logo3} alt="" />
                </div>

                <div ref={ref4}className="partners_box hidden">
                    <img src={logo4} alt="" />
                </div>

                <div ref={ref5}className="partners_box hidden">
                    <img src={logo5} alt="" />
                </div>

                <div ref={ref6}className="partners_box hidden">
                    <img src={logo6} alt="" />
                </div>

                <div ref={ref7}className="partners_box hidden">
                    <img src={logo7} alt="" />
                </div>

                <div ref={ref8}className="partners_box hidden">
                    <img src={logo8} alt="" />
                </div>

                <div ref={ref9}className="partners_box hidden">
                    <img src={logo9} alt="" />
                </div>
                
            </div>
        </div>
    )
}