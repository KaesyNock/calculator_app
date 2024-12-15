import React, { useState, useRef } from "react";


const Screen = ({ value }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Input = useRef(null);

    const handleChange = (event) => {
       Input(event.target.value);
    };

	return (
		// eslint-disable-next-line react/jsx-no-undef
		<Form>
			<textarea
				type='string'
				className='h-[100px] w-[100%] mb-[10px] border rounded border-black flex justify-end box-border px-2 py-2'
				mode='single'
				max={70}
				value={value}
                onChange={handleChange}
            />
				{value}
				<button
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					style={{
						transition: "transform 0.2 ease",
						transform: isHovered ? "translateX(0px)" : "translateX(10)",
					}}
					onClick={() => alert("Clear the calculator")}>
					←
				</button>
	
		</Form>
	);
};

export default Screen;

