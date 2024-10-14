import "./Gallery_card.css";

export default function GllaryCard(props){
    return(
        <div className="gallery_card_container">

            <div className="card_main_body">
                <div className="mainImg_container">
                    <img loading="lazy"  src={props.main_img} alt="" />
                </div>

                <div className="gallery_info_container">
                    <div>
                        <img loading="lazy"  src={props.another_img1} alt="" />
                    </div>

                    <div>
                        <img loading="lazy"  src={props.another_img2} alt="" />
                    </div>

                    <div className="gallery_size_no">
                        <p>{props.Gallary_size}+</p>
                    </div>
                </div>
            </div>

            <div className="gallery_card_footer">
                <p className="gallery_name">{props.Gallary_name}</p>
                <div > <img loading="lazy"  src={props.profile_pic} alt="" /> <p> {props.Gallery_creater}</p></div>
            </div>
        </div>
    )
}