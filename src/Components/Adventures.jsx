import "./Adventures.css";
// import AdventureCard_img_1 from "../Assets/Images/AdventureCard_img1.png";
// import AdventureCard_img_2 from "../Assets/Images/AdventureCard_img2.png";
// import metaNFT1 from "../Assets/Images/AdventureCard_img3.png";

import AdventureCard from "./Other_component/Adventure_card/AdventureCard";

import gamImg1 from "../Assets/Images/Adventure_images/game1.webp";
import gamImg2 from "../Assets/Images/Adventure_images/game2.webp";
import gamImg3 from "../Assets/Images/Adventure_images/game3.webp";
import gamImg4 from "../Assets/Images/Adventure_images/game4.webp";
import gamImg5 from "../Assets/Images/Adventure_images/game5.webp";


import metaImg1 from "../Assets/Images/Adventure_images/meta1.webp";
import metaImg2 from "../Assets/Images/Adventure_images/meta2.webp";
import metaImg3 from "../Assets/Images/Adventure_images/meta3.webp";
import metaImg4 from "../Assets/Images/Adventure_images/meta4.webp";
import metaImg5 from "../Assets/Images/Adventure_images/meta5.webp";
import metaImg6 from "../Assets/Images/Adventure_images/meta6.webp";

import nftImg1 from "../Assets/Images/Adventure_images/nft1.jpg";
import nftImg2 from "../Assets/Images/Adventure_images/nft2.jpg";
import nftImg3 from "../Assets/Images/Adventure_images/nft3.jpg";



const imgPathGameArr = [gamImg1,gamImg2,gamImg3,gamImg4,gamImg5];
const imgPathMetaArr = [metaImg1,metaImg2,metaImg3,metaImg4,metaImg5,metaImg6];
const imgPathNFTArr = [nftImg1,nftImg2,nftImg3];

export default function Adventures() {

  return (
    <div className="adventure_section_container" id="Features_Section">
      <div className="background_img_container"></div>

      <h1>Key Features</h1>
      
    <div className="outer_feature_container">
      <div className="feature_cards_container">
        
        <AdventureCard
          imgPath={imgPathGameArr}
          userName="Amieo Gaming Platform"
        />
        <AdventureCard
          imgPath={imgPathMetaArr}
          userName="Amieo Metaverse"
        />
        <AdventureCard
          imgPath={imgPathNFTArr}
          userName="Amieo NFT Collection"
        />
      </div>
      </div>
    </div>
  );
}
