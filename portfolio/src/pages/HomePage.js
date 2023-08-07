import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function HomePage() {
	const [text] = useTypewriter({
		words: [
			// "Full Stack Developer",
			// "Hack Reactor Graduate",
			"Loyola University of Chicago Graduate",
			// "Python",
			// "JavaScript",
			"React",
			// "Django",
			// "Redux Toolkit",
		],
		loop: false,
		typeSpeed: 60,
		deleteSpeed: 60,
	});

	return (
		<div className="mt-10 p-4 h-full">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-center text-3xl text-red-500 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					Joseph Ferraro
				</h1>
				<div className="text-center mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					<span>{text}</span>
					<Cursor cursorColor="red" />
				</div>
			</div>
		</div>
	);
}
export default HomePage;
