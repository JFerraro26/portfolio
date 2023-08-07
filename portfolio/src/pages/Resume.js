import { FaRegFilePdf } from "react-icons/fa";
import resumePdf from "../pdfs/Resume.pdf";

function Resume() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = resumePdf;
		link.download = "Resume.pdf";
		link.target = "_blank";
		link.click();
	};
	return (
		<div className="mt-4 mb-10 sm:mt-20 md:text-base lg:text-lg lg:max-w-4xl">
			<div className="grid grid-cols-3">
				<h1 className="font-bold col-start-2 col-span-1 text-lg text-red-500 text-center sm:text-4xl md:text-5xl lg:text-6xl">
					Resume
				</h1>
				<div className="col-start-3 col-span-1 flex justify-start items-center text-base sm:pl-10 sm:text-3xl sm:hover:text-red-300 md:text-4xl lg:text-5xl">
					<button
						onClick={handleDownload}
						className="border-1 rounded-sm border-transparent p-px"
					>
						<FaRegFilePdf />
					</button>
				</div>
			</div>
			<div className="flex flex-col text-sm gap-px  md:text-base lg:text-lg lg:max-w-4xl"></div>
			<h3 className="text-base mt-4 text-red-300 text-center sm:text-xl, md:text-2xl lg:text-3xl">
				Technical Skills
			</h3>
			<div className="flex flex-col px-4">
				<h2 className="text-blue-300">Programming Languages:</h2>
				<p className="ml-6">Python 3, SQL, CSS, HTML5, JavaScript</p>
				<h2 className="text-blue-300">Back-End:</h2>
				<p className="ml-6">
					PostgreSQL, Django 4, FastAPI, Django REST framework
				</p>
				<h2 className="text-blue-300">Front-End:</h2>
				<p className="ml-6">
					React, Redux Toolkit, Bootstrap, Tailwind
				</p>
			</div>
			<h3 className="text-base mt-4 text-red-300 text-center sm:text-xl, md:text-2xl lg:text-3xl">
				Application Development
			</h3>
			<div className="flex flex-col px-4">
				<h2 className="text-blue-300">Table Top Stories:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Used Django REST framework to create restful APIs
					</li>
					<li className="ml-6">
						Constructed an interactive world form in react that
						managed multiple aspects of a world through use of Redux
						Toolkit global state management
					</li>
				</ul>
				<h2 className="text-blue-300">PassPro:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Created a search filter that applied multiple search
						criteria to display only events that matched that
						criteria.
					</li>
					<li className="ml-6">
						Connected aspects of the user interface through the use
						of Redox global state management allowing access to
						specific information throughout the app.
					</li>
				</ul>
				<h2 className="text-blue-300">CarCar:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Developed an application using Django 4 and PostgreSQL
						for backend data management
					</li>
					<li className="ml-6">
						Designed a front-end filter function using React state
						management
					</li>
				</ul>
			</div>
			<h3 className="text-base mt-4 text-red-300 text-center sm:text-xl, md:text-2xl lg:text-3xl">
				Professional Experience
			</h3>
			<div className="flex flex-col px-4">
				<div className="flex justify-between px-2">
					<h2>ICU Nurse</h2>
					<h2>2018-2022</h2>
				</div>
				<h2 className="text-blue-300">Maxim Healthcare Staffing:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Provided skilled nursing care in the ICU.
					</li>
					<li className="ml-6">
						Taught patients and their family members about disease
						processes.
					</li>
					<li className="ml-6">Analyzed cardiac rhythms.</li>
				</ul>
				<h2 className="text-blue-300">AHS Staffing:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Used critical thinking in regards to patient care
					</li>
					<li className="ml-6">
						Monitored patient metabolic panels and determined proper
						patient treatment
					</li>
					<li className="ml-6">
						Identified signs of progression of patient status
					</li>
				</ul>
				<h2 className="text-blue-300">Ascension:</h2>
				<ul className="list-disc">
					<li className="ml-6">
						Trained as a superuser of Cerner graphical user
						interface
					</li>
					<li className="ml-6">
						Managed unit patient assignment as a Charge nurse
					</li>
					<li className="ml-6">
						Responded to Code Blue and Rapid Response
					</li>
				</ul>
			</div>
			<h3 className="text-base mt-4 text-red-300 text-center sm:text-xl, md:text-2xl lg:text-3xl">
				Education
			</h3>
			<div className="flex flex-col px-4">
				<div className="flex justify-between text-blue-300">
					<h2>Hack Reactor</h2>
					<h2>2023</h2>
				</div>
				<ul className="list-disc">
					<li className="ml-6">
						Advanced Software Engineering Certificate
					</li>
				</ul>
				<div className="flex justify-between text-blue-300">
					<h2>Loyola University of Chicago</h2>
					<h2>2021</h2>
				</div>
				<ul className="list-disc">
					<li className="ml-6">BS Nursing</li>
				</ul>
				<div className="flex justify-between text-blue-300">
					<h2>Wayne County Community College</h2>
					<h2>2017</h2>
				</div>
				<ul className="list-disc">
					<li className="ml-6">AS Nursing</li>
				</ul>
				<div className="flex justify-between text-blue-300">
					<h2>College of DuPage</h2>
					<h2>2012</h2>
				</div>
				<ul className="list-disc">
					<li className="ml-6">AS Fire Science</li>
				</ul>
				<div className="flex justify-between text-blue-300">
					<h2>Central DuPage Hospital</h2>
					<h2>2011</h2>
				</div>
				<ul className="list-disc">
					<li className="ml-6">Paramedic</li>
				</ul>
			</div>
		</div>
	);
}

export default Resume;
