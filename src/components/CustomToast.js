import React from "react";

const CustomToast = (props) => {
	const { value } = props;
	return (
		<>
			<a
				style={{
					color: "white",

					textDecoration: "none",
				}}
				target="_blank"
				href={`https://rinkeby.etherscan.io/tx/${value}`}
			>
				{`Transaction succesful click for  details`}
			</a>
		</>
	);
};
export default CustomToast;
