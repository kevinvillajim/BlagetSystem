import "./App.css";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./components/Color";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/admin/Dashboard";
import Maestros from "./views/admin/Maestros";
import Alumnos from "./views/admin/Alumnos";
import Clases from "./views/admin/Clases";
import Usuarios from "./views/admin/Usuarios";
import Tareas from "./views/admin/Tareas";
import Finanzas from "./views/admin/Finanzas";
import ClasesEstudiante from "./views/Estudiante/ClasesEstudiante";
import Certificados from "./views/admin/Certificados";

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
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/maestros" element={<Maestros />} />
						<Route path="/admin/alumnos" element={<Alumnos />} />
						<Route path="/admin/clases" element={<Clases />} />
						<Route path="/admin/usuarios" element={<Usuarios />} />
						<Route path="/admin/tareas" element={<Tareas />} />
						<Route path="/admin/finanzas" element={<Finanzas />} />
						<Route path="/admin/certificados" element={<Certificados />} />
						<Route path="/estudiante/clases" element={<ClasesEstudiante />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
