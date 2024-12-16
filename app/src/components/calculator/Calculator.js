import React, { useState} from "react";
import Screen from "./Screen";
import Button from "./Button";

const Calculator = () => {
	let [value, setValue] = useState("");

		return (
			<div className='pr-40 m-auto'>
				<div className='p-4 border rounded border-black mx-60 mt-20 size-full margin-auto mix-blend-luminosity'>
					<div className='gap-2 content-center'>
						<h1 className='text-2xl text-integers border rounded border-black px-2 py-2 text-center'>
							Welcome, Username
						</h1>
						{/* pull in state for username later */}
					</div>
					<Screen value={value} />
					<div className='grid grid-row gap-2 grid-cols-4 grid-rows-4 content-center p-4'>
					
					</div>
				</div>
			</div>
		);
	};


export default Calculator;
