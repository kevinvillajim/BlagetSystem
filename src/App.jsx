import "./App.css";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./components/Color";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

function App() {
	return (
		<>
			{/* <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider> */}
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
