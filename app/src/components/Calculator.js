import React, { useState } from "react";

const Calculator = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="pr-40 m-auto">
			<div className="p-4 border rounded border-black mx-60 mt-20 size-full margin-auto mix-blend-luminosity">
				<div className="gap-2 content-center">
					<h1 className="text-2xl text-integers border rounded border-black px-2 py-2">
						Welcome, Username
					</h1>
					{/* pull in state for username later */}
				</div>

				<div className="grid grid-row">
					<div className="text-2xl text-right border rounded border-black p-4 mt-4">
						<text>
							<button
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								style={{
									transition: "transform 0.2 ease",
									transform: isHovered ? "translateX(0px)" : "translateX(10)",
								}}>
								←
							</button>
						</text>
					</div>
					<ul className="grid grid-row gap-2 grid-cols-4 grid-rows-4 content-center p-4">
						<button className="numbersButton">
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								1
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								2
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								3
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								+
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								4
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								5
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								6
							</li>
						</button>
						<button>
							<li className="bg-operators rounded text-white text-xl px-2 py-1">
								-
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								7
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								8
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								9
							</li>
						</button>
						<button>
							<li className="bg-operators rounded text-white text-xl px-2 py-1">
								/
							</li>
						</button>
						<button>
							<li className="bg-operators rounded text-white text-xl px-2 py-1">
								,
							</li>
						</button>
						<button>
							<li className="bg-integers rounded text-white text-xl px-2 py-1">
								0
							</li>
						</button>
						<button>
							<li className="bg-operators rounded text-white text-xl px-2 py-1">
								=
							</li>
						</button>
						<button>
							<li className="bg-operators rounded text-white text-xl px-2 py-1">
								*
							</li>
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
