import React, { useState, useRef } from "react";


const Screen = ({ value }) => {

	return (
		<form>
			<textarea
				type='string'
				className='h- [] w-[100%] mb-[10px] border rounded border-black flex justify-end box-border px-2 py-2 resize-none'
				mode='single'
				max={70}
				value={value}
            />
		</form>
	);
};

export default Screen;

