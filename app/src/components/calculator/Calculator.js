import React, { useState, e } from "react";
import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

const Calculator = ({value}) => {
	const btnValues = [
		["C", "+-", "%", "/"],
		[7, 8, 9, "x"],
		[4, 5, 6, "-"],
		[1, 2, 3, "+"],
		[0, ".", "="],
	];

	const toLocaleString = (num) =>
		String(num).replace(/^(-?\d+)(\d{3})/, "$1,$2");

	const removeSpaces = (num) => num.toString().replace(/\s/g, "");

		let [calc, setCalc] = useState({
			sign: "",
			num: 0,
			res: 0,
		});

		const numClickHandler = (e) => {
			e.preventDefault();

			if (removeSpaces(calc.num).length < 16) {
				setCalc({
					...calc,
					num:
						calc.num === 0 && value === "0"
							? "0"
							: removeSpaces(calc.num) % 1 === 0
							? toLocaleString(Number(removeSpaces(calc.num + value)))
							: toLocaleString(calc.num + value),
					res: !calc.sign ? 0 : calc.res,
				});
			}
		};

		const commaClickHandler = () => {
			e.preventDefault();
			const value = e.target.innerHTML;

			setCalc({
				...calc,
				num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
			});
		};

		const signClickHandler = (e) => {
			e.preventDefault();
			const value = e.target.innerHTML;

			setCalc({
				...calc,
				sign: value,
				res: !calc.res && calc.num ? calc.num : calc.res,
				num: 0,
			});
		};

		const equalsClickHandler = () => {
			if (calc.sign && calc.num) {
				const math = (a, b, sign) =>
					sign === "+"
						? a + b
						: sign === "-"
						? a - b
						: sign === "x"
						? a * b
						: a / b;

				setCalc({
					...calc,
					res:
						calc.num === "0" && calc.sign === "/"
							? "Can't divide with 0"
							: toLocaleString(
									math(
										Number(removeSpaces(calc.res)),
										Number(removeSpaces(calc.num)),
										calc.sign
									)
							  ),
					sign: "",
					num: 0,
				});
			}
		};

		const invertClickHandler = () => {
			setCalc({
				...calc,
				num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
				res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
				sign: "",
			});
		};

		const percentClickHandler = () => {
			let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
			let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

			setCalc({
				...calc,
				num: (num /= Math.pow(100, 1)),
				res: (res /= Math.pow(100, 1)),
				sign: "",
			});
		};

		const resetClickHandler = () => {
			setCalc({
				...calc,
				sign: "",
				num: 0,
				res: 0,
			});
		};

		return (
			<div className='pr-40 m-auto'>
				<Wrapper>
					<div className='gap-2 content-center'>
						<h1 className='text-2xl text-integers border rounded border-black px-2 py-2 text-center'>
							Welcome, Username
						</h1>
						{/* pull in state for username later */}
					</div>
					<Screen value={calc.num ? calc.num : calc.res} />
					<ButtonBox>
						{btnValues.flat().map((btn, i) => {
							return (
								<Button
									key={i}
									className={
										btn === "="
											? "bg-operators rounded text-white text-xl px-2 py-1"
											: "bg-integers rounded text-white text-xl px-2 py-1"
									}
									value={btn}
									onClick={
										btn === "C"
											? resetClickHandler
											: btn === "+-"
											? invertClickHandler
											: btn === "%"
											? percentClickHandler
											: btn === "="
											? equalsClickHandler
											: btn === "/" || btn === "x" || btn === "-" || btn === "+"
											? signClickHandler
											: btn === "."
											? commaClickHandler
											: numClickHandler
									}
								/>
							);
						})}

					</ButtonBox>
				</Wrapper>
			</div>
		);
	};


export default Calculator;
