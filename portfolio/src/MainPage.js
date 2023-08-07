import { useState } from "react";
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
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
			<div className="grid grid-cols-2 sm:grid-cols-5">
				<div className="mt-4 gap-y-2 text-lg col-start-1 col-span-1 flex flex-col justify-center items-center sm:text-2xl sm:h-auto sm:items-start sm:mt-10 sm:ml-4 sm:gap-3 sm:justify-start xl:text-3xl">
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
						onClick={() => {
							setActive("resume");
						}}
						className={`${
							active === "resume"
								? "text-red-500"
								: "hover:text-red-300"
						}`}
					>
						Resume
					</button>
				</div>

				<AnimatePresence>
					{active === "aboutMe" ? (
						<motion.div
							className="middle flex items-center justify-center h-full col-start-1 col-span-2 sm:col-start-2 sm:col-span-3"
							key="aboutMe"
							initial={{ opacity: 0, rotateY: -180 }}
							animate={{ opacity: 1, rotateY: 0 }}
							transition={{ duration: 0.5 }}
						>
							<AboutMe />
						</motion.div>
					) : active === "projects" ? (
						<motion.div
							className="middle flex items-center justify-center h-full col-start-1 col-span-2 sm:col-start-2 sm:col-span-3"
							key="projects"
							initial={{ opacity: 0, rotateY: -180 }}
							animate={{ opacity: 1, rotateY: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Projects />
						</motion.div>
					) : active === "contact" ? (
						<motion.div
							className="middle flex items-center justify-center h-full col-start-1 col-span-2 sm:col-start-2 sm:col-span-3"
							key="contact"
							initial={{ opacity: 0, rotateY: -180 }}
							animate={{ opacity: 1, rotateY: 0 }}
							transition={{ duration: 0.5 }}
						>
							<ContactMe />
						</motion.div>
					) : active === "resume" ? (
						<motion.div
							className="middle flex items-center justify-center h-full col-start-1 col-span-2 sm:col-start-2 sm:col-span-3"
							key="contact"
							initial={{ opacity: 0, rotateY: -180 }}
							animate={{ opacity: 1, rotateY: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Resume />
						</motion.div>
					) : null}
				</AnimatePresence>

				<div className="col-start-2 col-span-1 row-start-1 row-span-1 sm:col-start-5">
					<div className="mt-2 flex flex-col items-center justify-center text-2xl gap-y-3 h-full sm:h-auto sm:text-4xl sm:flex-row sm:justify-end sm:gap-x-1 sm:mt-10 sm:mr-3 lg:gap-x-3 lg:text-5xl">
						<button
							onClick={() =>
								openInNewTab(
									"https://www.linkedin.com/in/jferraro26"
								)
							}
							className="hover:border-red-300 border-transparent border-4 rounded-sm"
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
				<AnimatePresence>
					{active === "home" ? (
						<div className="middle flex items-center justify-center h-full col-start-1 col-span-2 sm:col-start-1 sm:col-span-5">
							<motion.div
								className="w-full"
								key="home"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5 }}
							>
								<HomePage />
							</motion.div>
						</div>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	);
}
export default MainPage;
