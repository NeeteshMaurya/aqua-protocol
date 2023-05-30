import React from "react";
import Right from "../../assets/images/mainIcons/Right.svg";
const SuccessModal = (props) => {
	const { toogle, showModal, continueBtnHandler } = props;

	return (
		<>
			{showModal && (
				<div onClick={toogle} className="modal-overlay">
					<div className="modal-wrapper changeNetwork">
						<div className="modal-header">
							<p>Transaction Complete</p>
							<span onClick={toogle}>X</span>
						</div>
						<div className="modal-body">
							<p>
								Your transaction has been Completed successfully.Click on the
								button below to check details of transaction
							</p>
						</div>
						<div className="modal-footer">
							<a
								onClick={continueBtnHandler}
								className="btn-connect btn-connect-with-Arror"
							>
								Click here
								<img src={Right} alt="rightArrow"></img>
							</a>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SuccessModal;
