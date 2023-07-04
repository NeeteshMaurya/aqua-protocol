import React, { useState } from "react";
import Right from "../../assets/images/mainIcons/Right.svg";
const JoinPoolModalIntro = (props) => {
	const { toogle, showModal, continueBtnHandler } = props;

	return (
		<>
			{showModal && (
				<>
					<div onClick={toogle} className="modal-overlay"></div>
					<div style={{ height: "520px",borderRadius:'4px',background:'black',border:'1px solid white' }} className="modal-wrapper">
						<div className="modal-header">
							<p style={{fontFamily:'avenir',color:'white'}}>Disclaimer</p>
							<span onClick={toogle}>X</span>
						</div>
						<div style={{ marginRight: "12px" }} className="modal-body">
							<p style={{ paddingRight: "22px",fontFamily:'avenir',color:'white' }} >
								Aqua Protocol is a smart contract based token sale platform. While the smart contracts, codebase, and interface have been audited, Aqua Protocol makes no warranties to the completeness and safety of the services.<br></br>
								Aqua Protocol further disclaims all liabilites or loss from its users due to the users’ own negligence, lack of knowledge, or lack of safety measures on the part of the users. In no way, Aqua Protocol shall be held liable for the loss of funds due to users’ own malfeasance, ignorance, negligence, or due to unforeseen network costs.<br />
								The platform and the Services are presented “as is” and by utilizing the Service, users warrant that they are aware of the potential risks associated when interacting with the smart contracts, cryptocurrencies, cryptocurrency wallets, and blockchain-based systems.<br />
								Users’ transactions cannot be revert once confirmed on the transaction. Users have the sole responsbility to verify all information, including but not limited to the project information, smart contract address, network address, prior to interacting or utilizing the Service.<br />
								By clicking “Continue”, the user expressly warrants that user has read the Disclaimer and agrees to be bound by the covenants set.<br />
							</p>
						</div>
						<div className="modal-footer">
							<a style={{fontFamily:'avenir',color:'white',borderRadius:'2px',background:'#1214fd'}}
								onClick={continueBtnHandler}
								className="btn-connect btn-connect-with-Arror connectwalletbtn"
							>
								Continue
								<img src={Right} alt="rightArrow"></img>
							</a>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default JoinPoolModalIntro;
