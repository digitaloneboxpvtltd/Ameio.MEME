import "./Footer.css";
import ameio_logo from "../Assets/Icons/amieo_logo_nav.png";
import facebook_icon from '../Assets/Icons/socialMedia_icon/facebook.png';
import insta_icon from '../Assets/Icons/socialMedia_icon/instagram.png';
import twitter_icon from '../Assets/Icons/socialMedia_icon/twitter.png';
// import linkedin_icon from '../Assets/Icons/socialMedia_icon/linkedin_icon.png';
import youtube_icon from '../Assets/Icons/socialMedia_icon/play.png';
import mail_icon from '../Assets/Icons/socialMedia_icon/email.png';
import telegram_icon from '../Assets/Icons/socialMedia_icon/web.png';

export default function Footer() {

  return (
    <div className="Home_footer_section" id="Footer_Section">
      <div className="footer_mainContent">

        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
            <img loading="lazy" src={ameio_logo} alt="logo" className="footer_logo" />
          </div>
          <div className="footer_info">$AMEO is a meme coin with no intrinsic value or expectation of financial return. $AMEO is completely useless and for entertainment purposes only. When you purchase $AMEO, you are agreeing that you have seen this disclaimer.</div>
          
        </div>

        <div className="Importent">
          <h2>Importent</h2>
          <a href="https://drive.google.com/file/d/19WAXcqLorSALp_973RxOz1K6DoWTMUhv/view"><p>White Paper</p></a>
          <p>Buy Now</p>
        </div>
        
        <div className="contact_us">
          <h2>Follow Us</h2>
          <div className="social_media_icons">
            <a href="mailto:ameiomeme@gmail.com"><img loading="lazy" src={mail_icon} alt="" /></a>
            <a href="https://x.com/ameio_meme"><img loading="lazy" src={twitter_icon} alt="" /></a>
            <a href="https://t.me/ameio_memecommunity"><img loading="lazy" src={telegram_icon} alt="" /></a>
            <a href="https://www.facebook.com/ameiomeme/"><img loading="lazy" src={facebook_icon} alt="" /></a> 
            <a href="https://www.instagram.com/ameio_meme/"><img loading="lazy" src={insta_icon} alt="" /></a> 
            <a href="https://www.youtube.com/@Ameio_Meme"><img loading="lazy" src={youtube_icon} alt="" /></a>
            
            {/* <a href=""><img loading="lazy" src={linkedin_icon} alt="" /></a>  */}
          </div>
        </div>

      </div>

      <hr />

      <div className="footer_rights">
        <div className="rights">
          <p>@2024 by Ameio.Meme All rights reserved </p>
        </div>
      </div>
    </div>
  );
}
