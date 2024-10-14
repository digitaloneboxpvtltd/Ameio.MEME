import BuyToken from "./BuyComponents/BuyTokenSection";
import HowToBuy from "./BuyComponents/HowToBuySection";
import Referral from "./BuyComponents/ReferralSection";
import "./BuyNowPage.css";

export default function BuyNowPage(){
    return(
    <div className="BuyNowPage_container">
        <BuyToken/>
        <HowToBuy/>
        <Referral/>
    </div>)
}