import React from "react";

const ButtonBox = ({ children }) => {
	return (
		<div className='grid grid-row gap-2 grid-cols-4 grid-rows-4 content-center p-4'>
			{children}
		</div>
	);
};

export default ButtonBox;
