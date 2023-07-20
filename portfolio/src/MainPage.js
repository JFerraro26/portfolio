import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";

function MainPage() {
	const [active, setActive] = useState("home");
	return (
		<div className="text-white flex flex-col min-h-screen font-mono bg-gradient-to-l from-gray-700 via-gray-900 to-black">
			<div className="grid grid-cols-5">
				<div className="text-2xl col-start-1 flex flex-col items-start m-10 gap-4">
					<button
						onClick={() => {
							setActive("home");
						}}
						className={`${
							active === "home"
								? "text-red-500"
								: "hover:text-red-300"
						}`}
					>
						Home
					</button>
					<button
						onClick={() => {
							setActive("aboutMe");
						}}
						className={`${
							active === "aboutMe"
								? "text-red-500"
								: "hover:text-red-300"
						}`}
					>
						About Me
					</button>
					<button
						onClick={() => {
							setActive("projects");
						}}
						className={`${
							active === "projects"
								? "text-red-500"
								: "hover:text-red-300"
						}`}
					>
						Projects
					</button>
					<button
						onClick={() => {
							setActive("contact");
						}}
						className={`${
							active === "contact"
								? "text-red-500"
								: "hover:text-red-300"
						}`}
					>
						Contact Me
					</button>
				</div>
				<div className="col-start-2 col-span-4">
					{active === "home" ? (
						<HomePage />
					) : active === "aboutMe" ? (
						<AboutMe />
					) : active === "projects" ? (
						<Projects />
					) : active === "contact" ? (
						<ContactMe />
					) : null}
				</div>
			</div>
		</div>
	);
}
export default MainPage;
