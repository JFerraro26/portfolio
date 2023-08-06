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
		<div className="flex-grow p-2 h-full mt-4 md:mt-80">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-center text-xl md:text-7xl text-red-500">
					Joseph Ferraro
				</h1>
				<div className="text-center md:text-4xl md:mt-6">
					<span>{text}</span>
					<Cursor cursorColor="red" />
				</div>
			</div>
		</div>
	);
}
export default HomePage;
