import React from "react";
import { PiGithubLogoDuotone } from "react-icons/pi";
function Projects() {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener noreferrer");
	};
	return (
		<div className="projects flex flex-col text-sm items-center my-4 sm:mt-24 sm:text-base md:text-xl lg:text-2xl xl:text-3xl xl:max-w-4xl">
			<h1 className="font-bold text-lg text-red-500 text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
				Projects
			</h1>
			<div className="tabletop flex flex-col w-full sm:mt-2">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-base font-semibold text-red-300 sm:text-2xl md:text-3xl lg:text-4xl">
						Table Top Stories
					</h3>
					<p>An application for TTRPG world building</p>
					<div className="flex flex-col lg:flex-row lg:mt-3">
						<div className="w-full flex justify-evenly pt-1">
							<ul className="list-disc text-sm sm:text-base md:text-xl lg:text-2xl lg:flex lg:flex-col lg:justify-center lg:items-start xl:text-3xl">
								<li>Django REST</li>
								<li>React</li>
								<li>Redux</li>
								<li>Tailwind</li>
							</ul>
							<div className="flex justify-center items-center">
								<button
									onClick={() =>
										openInNewTab(
											"https://github.com/JFerraro26/tableTopStories"
										)
									}
									className="text-3xl rounded-full border-2 border-transparent sm:hover:border-red-300 sm:text-5xl"
								>
									<PiGithubLogoDuotone />
								</button>
							</div>
						</div>
						<div className="w-full px-8 py-2 lg:aspect-auto lg:px-0 lg:py-0">
							<img
								className="max-w-full border-2 border-red-500 rounded-xl shadow-lg shadow-red-300"
								src={
									process.env.PUBLIC_URL +
									"/images/tableTopStoriesDetail.jpg"
								}
								alt="Table Top Stories"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="passpro flex flex-col w-full mt-2 lg:mt-4">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-base font-semibold text-red-300 sm:text-2xl md:text-3xl">
						Pass Pro
					</h3>
					<p>An independent ticket sales application</p>
					<div className="flex flex-col lg:flex-row lg:mt-3">
						<div className="w-full flex justify-evenly pt-1">
							<ul className="list-disc text-sm sm:text-base md:text-xl lg:text-2xl lg:flex lg:flex-col lg:justify-center lg:items-start xl:text-3xl">
								<li>FastAPI</li>
								<li>React</li>
								<li>Redux</li>
								<li>Tailwind</li>
							</ul>
							<div className="flex justify-center items-center">
								<button
									onClick={() =>
										openInNewTab(
											"https://github.com/JFerraro26/passPro"
										)
									}
									className="text-3xl rounded-full border-2 border-transparent sm:hover:border-red-300 sm:text-5xl"
								>
									<PiGithubLogoDuotone />
								</button>
							</div>
						</div>
						<div className="w-full px-8 py-2 lg:aspect-auto lg:px-0 lg:py-0">
							<img
								className="max-w-full border-2 border-red-500 rounded-xl shadow-lg shadow-red-300"
								src={
									process.env.PUBLIC_URL +
									"/images/passPro.jpg"
								}
								alt="Pass Pro"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="carcar flex flex-col w-full mt-2 lg:mt-4">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-base font-semibold text-red-300 sm:text-2xl md:text-3xl">
						Car Car
					</h3>
					<p>A used car dealership application</p>
					<div className="flex flex-col lg:flex-row lg:mt-3">
						<div className="w-full flex justify-evenly pt-1">
							<ul className="list-disc text-sm sm:text-base md:text-xl lg:text-2xl lg:flex lg:flex-col lg:justify-center lg:items-start xl:text-3xl">
								<li>Django</li>
								<li>React</li>
								<li>Bootstrap</li>
							</ul>
							<div className="flex justify-center items-center">
								<button
									onClick={() =>
										openInNewTab(
											"https://github.com/JFerraro26/carCar"
										)
									}
									className="text-3xl rounded-full border-2 border-transparent sm:hover:border-red-300 sm:text-5xl"
								>
									<PiGithubLogoDuotone />
								</button>
							</div>
						</div>
						<div className="w-full px-8 py-2 lg:aspect-auto lg:px-0 lg:py-0">
							<img
								className="max-w-full border-2 border-red-500 rounded-xl shadow-lg shadow-red-300"
								src={
									process.env.PUBLIC_URL +
									"/images/carCar.jpg"
								}
								alt="Pass Pro"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Projects;
