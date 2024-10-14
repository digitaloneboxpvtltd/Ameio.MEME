
import "./HomePage.css"
import LandingPage from "../LandingPage";
import FeaturedSection from "../FeaturedSection";
import Adventures from "../Adventures";
import Gallery from "../Nft_gallery";
import Metaverse from "../Metaverse";
import Tokenomics from "../Tokenomics";
import RoadMap from "../RoadMap";
import HowBuy from "../How_to_buy_new";
import Partners from "../Partners";
import TapAmeio from "../Tap_Ameio";
import PinkSaleLive from "../Other_component/pinkSale_live/PinkSaleLive";


export default function HomePage(){
    return(
        <div className="HomePage_container">
            <LandingPage/>
            <PinkSaleLive/>
            <FeaturedSection/>
            <HowBuy/>
            <Adventures/>
            {/* <Gallery/>   */}
            {/* <Metaverse/> */}
            <TapAmeio/>
            <Partners/>
            <Tokenomics/>
            <RoadMap/>
        </div>
    )
}