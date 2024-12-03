import React from "react";

const History = () => {
	return (
		<div className="hidden md:block">
			<div className="p-4 border rounded border-black mx-60 mt-20 mix-blend-luminosity ">
				<div className="gap-2 content-center">
					<h1 className="text-2xl text-integers border rounded border-black px-2 py-2">
						History
					</h1>
					{/* pull in state after for back end */}
				</div>
				<div className="border rounded border-black p-4 mt-4 pb-60"></div>
			</div>
		</div>
	);
};

export default History;
