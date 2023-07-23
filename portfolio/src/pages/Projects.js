import { PiGithubLogoDuotone } from "react-icons/pi";
function Projects() {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener noreferrer");
	};
	return (
		<div className="flex flex-col max-w-5xl my-14 gap-10 w-full text-lg">
			<h1 className="font-bold text-4xl text-red-500 text-center">
				Projects
			</h1>
			<div className="flex flex-row justify-between lg:justify-evenly lg:gap-10 w-full">
				<div className="flex flex-col justify-center content-center items-center">
					<h4 className="text-2xl font-semibold text-red-300">
						PassPro
					</h4>
					<h4>An independent ticket sales application</h4>
					<div className="flex justify-evenly w-full">
						<ul className="list-disc ml-10">
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
								className="text-3xl rounded-full border-2 border-transparent hover:border-red-300"
							>
								<PiGithubLogoDuotone />
							</button>
						</div>
					</div>
				</div>
				<div className="w-80 h-80 flex justify-center items-center">
					<img
						className="border-2 border-red-500 rounded-xl shadow-2xl shadow-red-300"
						src="/images/passPro.jpg"
						alt="PassPro"
					/>
				</div>
			</div>
			<div className="flex flex-row justify-between lg:justify-evenly lg:gap-10 w-full">
				<div className="w-80 h-80 flex justify-center items-center">
					<img
						className="border-2 border-red-500 rounded-xl shadow-2xl shadow-red-300"
						src="/images/tableTopStoriesDetail.jpg"
						alt="TableTopStories"
					/>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h4 className="text-2xl font-semibold text-red-300">
						Table Top Stories
					</h4>
					<h4>An application for TTRPG world building</h4>
					<div className="flex justify-evenly w-full">
						<ul className="list-disc ml-10">
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
								className="text-3xl rounded-full border-2 border-transparent hover:border-red-300"
							>
								<PiGithubLogoDuotone />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between lg:justify-evenly lg:gap-10  w-full">
				<div className="flex flex-col justify-center items-center">
					<h4 className="text-2xl font-semibold text-red-300">
						CarCar
					</h4>
					<h4>A used car dealership application</h4>
					<div className="flex justify-evenly w-full">
						<ul className="list-disc ml-10">
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
								className="text-3xl rounded-full border-2 border-transparent hover:border-red-300"
							>
								<PiGithubLogoDuotone />
							</button>
						</div>
					</div>
				</div>
				<div className="w-80 h-80 flex justify-center items-center">
					<img
						className="border-2 border-red-500 rounded-xl shadow-2xl shadow-red-300"
						src="/images/carCar.jpg"
						alt="carCar"
					/>
				</div>
			</div>
		</div>
	);
}
export default Projects;
