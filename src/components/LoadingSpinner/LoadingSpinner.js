import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
const LoadingSpinner = () => {
	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: "100vh" }}
		>
			<BeatLoader color="white" size={10} />
		</div>
	);
};

export default LoadingSpinner;
