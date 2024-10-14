
import "./How_to_buy_new.css"
import create_wallet_img from "../Assets/Images/create_wallet.png";
import solana_img from "../Assets/Images/solana.png";
import pinksale_img from "../Assets/Images/pinksale_single_logo.png";
import Buy_logo from "../Assets/Images/buy_icon_new.png";
import useIntersectionObserver from "./InterSection_observer";    

export default function HowBuy(){
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


    return(
        <div className="how_to_buy_section_container" id="HowBuy_Section">
            <h1 className="how_section_heading">How to Buy Ameio.Meme</h1>

            <div className="allStep_container">  
            <div  ref={ref1} className="buy_step_container transform_side">
                <img loading="lazy" className="step_image" src={create_wallet_img} alt="" />
                
                <div className="step_info_container">
                    <p className="step_name">Create a Phantom / Trust Wallet:</p>
                    <p className="step_info">Mobile: Download the Phantom or Trust Wallet from the App Store or Google Play Store for free.</p>
                    <p className="step_info">Desktop: Download the Google Chrome extension by going to Phantom's website.</p>
                </div>
            </div>


            <div ref={ref2} className="buy_step_container transform_side">
                    <img loading="lazy" className="step_image" src={solana_img} alt="" />
                
                <div className="step_info_container">
                    <p className="step_name">Get Some SOL:</p>
                    <p className="step_info">Ensure you have SOL in your wallet to swap for $AMEO.If you don’t have any SOL: Buy directly on Phantom /Trust wallet or Transfer from another wallet.Purchase on another exchange and send it to your wallet.</p>

                </div>
            </div>


            <div ref={ref3} className="buy_step_container transform_side">
                    <img loading="lazy" className="step_image" src={pinksale_img} alt="" />
                
                <div className="step_info_container">
                    <p className="step_name">Go to Pinksale Page:</p>

                    <p className="step_info">Connect to pinksale.finance using  Google Chrome or the browser inside the Phantom/ Trust wallet app ,Connect your wallet.Paste the $AMEO token address into pinksale , select AMEIO, and confirm. Sign the wallet signature prompt in Phantom/Trust wallet.</p>
                </div>
            </div>


            <div ref={ref4} className="buy_step_container transform_side">
                    <img loading="lazy" className="step_image" src={Buy_logo} alt="" />
                
                <div className="step_info_container">
                    <p className="step_name">Buy AMEO:</p>
                    <p className="step_info">Buy AMEO token.</p>
                </div>
            </div>
            </div>

        </div>
    )
}