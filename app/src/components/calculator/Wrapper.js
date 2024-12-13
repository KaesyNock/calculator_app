import React from "react";

const Wrapper = ({ children }) => {
	return (
		<div className='p-4 border rounded border-black mx-60 mt-20 size-full margin-auto mix-blend-luminosity'>
			{children}
		</div>
	);
};

export default Wrapper;
