import React, { useState } from "react";
import "bootstrap";

const Home = () => {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	const handleClick = color => {
		if (color == "red") {
			setRed(true);
			setYellow(false);
			setGreen(false);
		} else if (color == "yellow") {
			setYellow(true);
			setRed(false);
			setGreen(false);
		} else if (color == "green") {
			setGreen(true);
			setRed(false);
			setYellow(false);
		} else {
			return;
		}
	};

	return (
		<div className="div-principal">
			<div
				className={`light red ${red ? "glow" : ""}`}
				onClick={() => {
					handleClick("red");
				}}></div>
			<div
				className={`light yellow ${yellow ? "glow" : ""}`}
				onClick={() => {
					handleClick("yellow");
				}}></div>
			<div
				className={`light green ${green ? "glow" : ""}`}
				onClick={() => {
					handleClick("green");
				}}></div>
		</div>
	);
};

export default Home;
