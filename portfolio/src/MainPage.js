import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function MainPage() {
	const [active, setActive] = useState("home");
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener noreferrer");
	};
	return (
		<div className="text-white flex flex-col min-h-screen font-mono bg-cube bg-gradient-to-l from-gray-700 via-gray-900 to-black">
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
						Contact
					</button>
					<button
						onClick={() =>
							openInNewTab(
								"https://docs.google.com/document/d/1xV_S7t6O3OinFtNyuIlko6yYttQUuTh0OIreo4XVGuw/edit?usp=sharing"
							)
						}
						className="hover:text-red-300"
					>
						Resume
					</button>
				</div>
				<div className="col-start-2 col-span-3">
					<AnimatePresence>
						{active === "home" ? (
							<motion.div
								className="flex justify-center"
								key="home"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<HomePage />
							</motion.div>
						) : active === "aboutMe" ? (
							<motion.div
								className="flex justify-center"
								key="aboutMe"
								initial={{ opacity: 0, rotateY: -180 }}
								animate={{ opacity: 1, rotateY: 0 }}
								transition={{ duration: 0.5 }}
							>
								<AboutMe />
							</motion.div>
						) : active === "projects" ? (
							<motion.div
								className="flex justify-center"
								key="projects"
								initial={{ opacity: 0, rotateY: -180 }}
								animate={{ opacity: 1, rotateY: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Projects />
							</motion.div>
						) : active === "contact" ? (
							<motion.div
								className="flex justify-center"
								key="contact"
								initial={{ opacity: 0, rotateY: -180 }}
								animate={{ opacity: 1, rotateY: 0 }}
								transition={{ duration: 0.5 }}
							>
								<ContactMe />
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>
				<div className="col-start-5">
					<div className="text-4xl flex justify-end gap-8 m-10">
						<button
							onClick={() =>
								openInNewTab(
									"https://www.linkedin.com/in/jferraro26"
								)
							}
							className="hover:border-red-300 border-transparent border-4 rounded-md"
						>
							<GrLinkedin />
						</button>
						<button
							onClick={() =>
								openInNewTab("https://github.com/JFerraro26")
							}
							className="hover:border-red-300 border-transparent border-4 rounded-full"
						>
							<SiGithub />
						</button>
						<a
							className="hover:border-red-300 border-transparent border-4 rounded-md"
							href="mailto:ferraroj2626@gmail.com"
						>
							<MdOutlineMailOutline />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MainPage;
