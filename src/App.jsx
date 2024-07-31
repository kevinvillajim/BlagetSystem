/* eslint-disable react/prop-types */
import "./App.css";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./components/Color";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Outlet,
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
import Curso1Unidad1 from "./views/Estudiante/Curso1/Curso1Unidad1";
import Curso1Unidad2 from "./views/Estudiante/Curso1/Curso1Unidad2";
import Curso1Unidad3 from "./views/Estudiante/Curso1/Curso1Unidad3";
import Curso2Unidad1 from "./views/Estudiante/Curso2/Curso2Unidad1";
import Curso2Unidad2 from "./views/Estudiante/Curso2/Curso2Unidad2";
import Curso2Unidad3 from "./views/Estudiante/Curso2/Curso2Unidad3";
import CursosRedirect from "./views/Estudiante/CursosRedirect";
import Curso1Certificado from "./views/Estudiante/Curso1/Curso1Certificado";
import Curso2Certificado from "./views/Estudiante/Curso2/Curso2Certificado";
import DashboardEstudiante from "./views/Estudiante/DashboardEstudiante";
import Certificados from "./views/admin/Certificados";
import CertificadosEstudiante from "./views/Estudiante/CertificadosEstudiante";
import Perfil from "./views/Perfil";
import EditarPerfil from "./views/EditarPerfil";

const PrivateRoute = ({children}) => {
	const token = localStorage.getItem("token");
	const user = JSON.parse(localStorage.getItem("user"));

	if (!token || !user?.active) {
		return <Navigate to="/login" />;
	}

	return children;
};

const RoleRoute = ({allowedRoles, redirectPath = "/login", children}) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const hasAllowedRole =
		user && allowedRoles.includes(user.role) && user.active;

	if (!hasAllowedRole) {
		return <Navigate to={redirectPath} replace />;
	}

	return children ? children : <Outlet />;
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
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
					<Route
						path="/admin/*"
						element={
							<RoleRoute allowedRoles={[1]} redirectPath="/login">
								<Routes>
									<Route path="dashboard" element={<Dashboard />} />
									<Route path="maestros" element={<Maestros />} />
									<Route path="alumnos" element={<Alumnos />} />
									<Route path="clases" element={<Clases />} />
									<Route path="usuarios" element={<Usuarios />} />
									<Route path="tareas" element={<Tareas />} />
									<Route path="finanzas" element={<Finanzas />} />
									<Route path="certificados" element={<Certificados />} />
								</Routes>
							</RoleRoute>
						}
					/>
					<Route
						path="/estudiante/*"
						element={
							<RoleRoute allowedRoles={[2]} redirectPath="/login">
								<Routes>
									<Route
										path="cursos/curso1/unidad1"
										element={<Curso1Unidad1 />}
									/>
									<Route
										path="cursos/curso1/unidad2"
										element={<Curso1Unidad2 />}
									/>
									<Route
										path="cursos/curso1/unidad3"
										element={<Curso1Unidad3 />}
									/>
									<Route
										path="cursos/curso2/unidad1"
										element={<Curso2Unidad1 />}
									/>
									<Route
										path="cursos/curso2/unidad2"
										element={<Curso2Unidad2 />}
									/>
									<Route
										path="cursos/curso2/unidad3"
										element={<Curso2Unidad3 />}
									/>
									<Route path="dashboard" element={<DashboardEstudiante />} />
									<Route
										path="certificados"
										element={<CertificadosEstudiante />}
									/>
									<Route
										path="cursos/curso1/certificado"
										element={<Curso1Certificado />}
									/>
									<Route
										path="cursos/curso2/certificado"
										element={<Curso2Certificado />}
									/>
									<Route
										path="cursos/curso1"
										element={<CursosRedirect curso={0} />}
									/>
									<Route
										path="cursos/curso2"
										element={<CursosRedirect curso={1} />}
									/>
								</Routes>
							</RoleRoute>
						}
					/>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
