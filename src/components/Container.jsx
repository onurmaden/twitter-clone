import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex flex-row min-h-screen justify-center max-w-[1265px] mx-auto text-defaultText">
			{children}
		</div>
	);
};

export default Container;
