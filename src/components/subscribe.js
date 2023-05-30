import React, { useState } from "react";
import SubscribeModal from "./modal/SubscribeModal";

const Subscribe = (props) => {
	const [ShowSubscribemodal, setShowSubscribeModal] = useState(false)
	const toggleSubscribeModal = () => {
		setShowSubscribeModal(!ShowSubscribemodal)
	}
	return (<>
		<div className="main-subscribe-wrapper">
			<h2>Get alerts for new pools</h2>
			<p>
				Subscribe to get notified about new pools and other relevant events.
			</p>
			<a onClick={toggleSubscribeModal} className="btn btn-connect subscribe-btn">Subscribe</a>

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
