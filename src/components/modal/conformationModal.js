import React from "react";
import Right from "../../assets/images/mainIcons/Right.svg";
const ConformationModal = (props) => {
	const { toogle, showModal, continueBtnHandler } = props;

	return (
		<>
			{showModal && (
				<div onClick={toogle} className="modal-overlay">
					<div className="modal-wrapper changeNetwork">
						<div className="modal-header">
							<p>Complete Transaction</p>
							<span onClick={toogle}>X</span>
						</div>
						<div className="modal-body">
							<p>Please open Metamask Extension and Complete the transaction</p>
						</div>
						<div className="modal-footer">
							<a
								onClick={continueBtnHandler}
								className="btn-connect btn-connect-with-Arror"
							>
								Continue
								<img src={Right} alt="rightArrow"></img>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ConformationModal;
