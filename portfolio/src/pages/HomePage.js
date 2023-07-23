import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function HomePage() {
	const [text] = useTypewriter({
		words: [
			"Full Stack Developer",
			"Hack Reactor Graduate",
			"Loyola University of Chicago Graduate",
			"Python",
			"JavaScript",
			"React",
			"Django",
			"Redux Toolkit",
		],
		loop: false,
		typeSpeed: 60,
		deleteSpeed: 60,
	});

	return (
		<div className=" flex flex-col items-center justify-center gap-7 h-screen">
			<h1 className="text-7xl text-red-500">Joseph Ferraro</h1>
			<div className="text-4xl">
				<span>{text}</span>
				<Cursor cursorColor="red" />
			</div>
		</div>
	);
}
export default HomePage;
