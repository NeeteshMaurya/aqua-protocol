import React, { useState } from "react";
import SubscribeModal from "./modal/SubscribeModal";

const Subscribe = (props) => {
	const [ShowSubscribemodal, setShowSubscribeModal] = useState(false)
	const toggleSubscribeModal = () => {
		setShowSubscribeModal(!ShowSubscribemodal)
	}
	return (<>
		<div className="main-subscribe-wrapper" style={{background:'rgba(20,30,50,0.80)',borderRadius:'2px'}}>
			<h2 style={{fontFamily:'avenir',color:'white'}}>Get alerts for new pools</h2>
			<p style={{fontFamily:'avenir',color:'white'}}>
				Subscribe to get notified about new pools and other relevant events.
			</p>
			<a onClick={toggleSubscribeModal} className="btn btn-connect subscribe-btn connectwalletbtn">Subscribe</a>

		</div>
		{ShowSubscribemodal && (
			<SubscribeModal
				showModal={ShowSubscribemodal}
				toogle={toggleSubscribeModal}

			/>
		)}
	</>);
};

export default Subscribe;
