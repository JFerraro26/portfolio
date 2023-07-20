import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
