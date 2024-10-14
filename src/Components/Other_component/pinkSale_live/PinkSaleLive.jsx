
import "./PinkSaleLive.css";
import pinksale_logo from "../../../Assets/Images/pinksale_single_logo.png";

export default function PinkSaleLive(){
    return(
        <div className="PinkSaleLive_container">
        <div className="PinkSale_announcement_container">
            <p><img src={pinksale_logo} alt="" />PinkSale is live now, Click on "Visit" to create your own initial token sale.</p>
        </div>

        <div className="announcement_button_container">
            <button> visite </button>
        </div>
        </div>
    )
}