import React from "react";

const Calculator = () => {
	return (
		<div className="container">
			<div className="border-2 p-4 mx-60">
				<h1 className="text-2xl">Welcome, Username</h1>
				{/* pull in state for username later */}
			</div>
			<div className="container">
				<div className="grid-cols-4 gap-4">
					<div className="col-span-4">Results</div>
					<ul className="grid gap-2 grid-cols-4 grid-rows-4 content-center">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>+</li>
						
						
							<li>4</li>
							<li>5</li>
							<li>6</li>
							<li>-</li>
						
						
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>/</li>
					
					
							<li>,</li>
							<li>0</li>
							<li>=</li>
							<li>*</li>
						
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
