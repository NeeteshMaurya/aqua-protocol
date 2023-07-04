import React from "react";
import Logo from "../assets/images/mainIcons/Avatar.png";
import Telegram from "../assets/images/mainIcons/Brands/telegram.svg";
import Twitter from "../assets/images/mainIcons/Brands/Twitter.svg";
import meta from "../assets/images/mainIcons/Brands/meta.svg";
import linkedin from "../assets/images/mainIcons/Brands/LinkedIn.svg";
import {
	TwitterLink,
	TelegramLink,
	MediumLink,
	LinkedinLink,
} from "../assets/externalLinks/externalLinks";

const Footer = (props) => {
	return (
		<footer>
			<div className="footer-top-wrapper">
				<div className="icon-name">
					<img src={Logo} alt="site Logo" />
					<p style={{fontFamily:'avenir',color:'white'}}>AQUA PROTOCOL</p>
				</div>
				<div className="social-icons">
					<a target="_blank"> 
						<img src={Twitter} alt="social media icon" />
					</a>
					<a target="_blank" >                            {/* href={LinkedinLink} */}
						<img src={linkedin} alt="social media icon" />
					</a>
					<a target="_blank" >
						<img src={meta} alt="social media icon" />
					</a>
					<a target="_blank" >
						<img src={Telegram} alt="social media icon" />
					</a>
				</div>
			</div>
			<div className="footer-bottom-wrapper">
				<p style={{fontFamily:'avenir',color:'white'}}>© AQUA PROTOCOL, 2023. All rights reserved</p>
				<div>
					<p style={{fontFamily:'avenir',color:'white'}}>Privacy Policy</p>
					<p style={{fontFamily:'avenir',color:'white'}}>Terms and Conditions</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
