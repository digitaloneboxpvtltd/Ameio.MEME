
import './PopUp_msg.css'; 
import coming_soon_img from "../../../Assets/Icons/coming_soon.gif";
import piksale_img from "../../../Assets/Icons/pinksale_logo.svg";

import { useState } from 'react';

export default function PopUpMsg (props){

  const [fadeOut, setFadeOut] = useState(false);
  const handleClick = () => {
    setFadeOut(!fadeOut);
    setTimeout(()=>{
      props.onClose()
    },300)
  };

    return(
      <div className="Pop_up_container">
        <img loading="lazy" src={piksale_img} alt="coming_soon_lcon" />
        <p>Get ready to be among the first to experience exclusive benefits and early access to our latest offerings. Stay tuned for more updates!</p>
        <span className={fadeOut?"fade-out PopUp_close-button" :"PopUp_close-button"} onClick={handleClick}>ok</span>
      </div>
  );
}


