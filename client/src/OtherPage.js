import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
	return (
		<div>
			<p>in some other page</p>
			<Link to="/">Go Back Home</Link>
		</div>
	);
};

export default OtherPage;
