import "./App.css";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./components/Color";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/admin/Dashboard";
import Maestros from "./views/admin/Maestros";
import Alumnos from "./views/admin/Alumnos";
import Clases from "./views/admin/Clases";
import Usuarios from "./views/admin/Usuarios";
import Tareas from "./views/admin/Tareas";
import Finanzas from "./views/admin/Finanzas";
import Unidad1 from "./views/Estudiante/Unidad1";
import Unidad2 from "./views/Estudiante/Unidad2";
import Unidad3 from "./views/Estudiante/Unidad3";
import CursosRedirect from "./views/Estudiante/CursosRedirect";
import Certificado from "./views/Estudiante/Certificado";
import DashboardEstudiante from "./views/Estudiante/DashboardEstudiante";
import Certificados from "./views/admin/Certificados";
import CertificadosEstudiante from "./views/Estudiante/CertificadosEstudiante";
import Perfil from "./views/Perfil";
import EditarPerfil from "./views/EditarPerfil";

const PrivateRoute = ({children}) => {
	return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};

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
						<Route path="/register" element={<Register />} />
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/maestros" element={<Maestros />} />
						<Route path="/admin/alumnos" element={<Alumnos />} />
						<Route path="/admin/clases" element={<Clases />} />
						<Route path="/admin/usuarios" element={<Usuarios />} />
						<Route path="/admin/tareas" element={<Tareas />} />
						<Route path="/admin/finanzas" element={<Finanzas />} />
						<Route path="/admin/certificados" element={<Certificados />} />
						<Route
							path="/estudiante/cursos/curso1/unidad1"
							element={<Unidad1 />}
						/>
						<Route
							path="/estudiante/cursos/curso1/unidad2"
							element={<Unidad2 />}
						/>
						<Route
							path="/estudiante/cursos/curso1/unidad3"
							element={<Unidad3 />}
						/>

						<Route
							path="/estudiante/dashboard"
							element={
								<PrivateRoute>
									<DashboardEstudiante />
								</PrivateRoute>
							}
						/>
						<Route
							path="/estudiante/certificados"
							element={
								<PrivateRoute>
									<CertificadosEstudiante />
								</PrivateRoute>
							}
						/>
						<Route
							path="/estudiante/cursos/curso1/certificado"
							element={<Certificado />}
						/>
						<Route
							path="/estudiante/cursos/curso1"
							element={<CursosRedirect curso={0} />}
						/>
						<Route
							path="/profile"
							element={
								<PrivateRoute>
									<Perfil />
								</PrivateRoute>
							}
						/>
						<Route
							path="/edit-profile"
							element={
								<PrivateRoute>
									<EditarPerfil />
								</PrivateRoute>
							}
						/>
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
