import HomePage from "./pages/HomePage";
function MainPage() {
	return (
		<div className="flex flex-col min-h-screen bg-sky-200 font-mono">
			<div className="grid grid-cols-7">
				<div className="col-start-1 col-span-3">
					<div className="flex flex-col m-8">
						<h1 className="text-5xl">Joseph Ferraro</h1>
						<h2 className="ml-2 mt-2 text-xl">
							Full Stack Developer
						</h2>
						<button>Aboout Me</button>
						<button>Projects</button>
						<button>Contact Me</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MainPage;
