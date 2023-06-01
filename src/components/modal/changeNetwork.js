import React, { useEffect } from "react";
import Right from "../../assets/images/mainIcons/Right.svg";
const ChangeNetwork = (props) => {
	const { toogle, showModal } = props;

	const changeNwBtnHandler = () => {
		const { ethereum } = window;
		if (ethereum) {
			ethereum
				.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "0x66EED" }],
				})
				.then((val) => console.log(val));
		}

		toogle();
	};

	return (
		<>
			{showModal && (
				<div onClick={toogle} className="modal-overlay">
					<div className="modal-wrapper changeNetwork">
						<div className="modal-header">
							<p>Wrong Network</p>
							<span onClick={toogle}>X</span>
						</div>
						<div className="modal-body">
							<p>Please connect to the appropriate Etherium network</p>
						</div>
						<div className="modal-footer">
							<a
								onClick={changeNwBtnHandler}
								className="btn-connect btn-connect-with-Arror"
							>
								Change Network
								<img src={Right} alt="rightArrow"></img>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ChangeNetwork;
