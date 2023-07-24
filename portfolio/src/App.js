import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
	return (
		<BrowserRouter basename="/portfolio">
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
