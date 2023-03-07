import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard/index";
import WrithingPage from "../pages/Writing/index-old";
import WritingFirstPage from "../pages/Writing/index";
import SignUpPage from "../pages/SignUp/index";
import LandingPage from "../pages/Landing";

function Router () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<DashBoardPage />} />
				<Route path="/writings/first" element={<WritingFirstPage />} />
				<Route path="/writings/second" element={<WrithingPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/landing" element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
