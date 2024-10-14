import GllaryCard from "./Other_component/Gallery_cards/Gallery_card";
import card_poster_1 from "../Assets/Images/Gallery_card_poster1.webp";
import card_poster_2 from "../Assets/Images/Gallery_card_poster2.jpeg";
import card_poster_3 from "../Assets/Images/Gallery_card_poster3.webp";

import card1_another1 from "../Assets/Images/card1_anotherimg_1.webp";
import card1_another2 from "../Assets/Images/card1_anotherimg_2.webp";

import card2_another1 from "../Assets/Images/card2_anotherimg_1.jpeg";
import card2_another2 from "../Assets/Images/card2_anotherimg_2.jpeg";
import card3_another1 from "../Assets/Images/card3_anotherimg_1.webp";
import card3_another2 from "../Assets/Images/card3_anotherimg_2.webp";

import card_profile_pic from "../Assets/Images/GallerycardProfile_picther.png";
import "./Nft_gallery.css";

export default function Gallery(){
    return (
    <div className="Gallery_Section_container">
        <h1>Ameio's NFT Gallery </h1>
        <p>AMEIO.Meme provides a platform for users to create, share, and trade NFT memes, combining the popularity of memes with the uniqueness of non-fungible tokens (NFTs).</p>
        
        <div className="gallery_card_contaner">
            <GllaryCard main_img={card_poster_1} another_img1={card1_another1} another_img2={card1_another2} profile_pic={card_profile_pic} Gallary_size={1025} Gallary_name = {"Stuart Little"} Gallery_creater={"Scarlett Johnson"}/>
            <GllaryCard main_img={card_poster_2} another_img1={card2_another1} another_img2={card2_another2} profile_pic={card_profile_pic} Gallary_size={1120} Gallary_name = {"Stuart Little"} Gallery_creater={"Scarlett Johnson"}/>
            <GllaryCard main_img={card_poster_3} another_img1={card3_another1} another_img2={card3_another2} profile_pic={card_profile_pic} Gallary_size={900} Gallary_name = {"Stuart Little"} Gallery_creater={"Scarlett Johnson"}/>
        </div>      
    </div>)
}