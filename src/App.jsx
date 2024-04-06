import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Color";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Maestros from "./views/Maestros";
import Alumnos from "./views/Alumnos";
import Clases from "./views/Clases";
import Usuarios from "./views/Usuarios";
import Tareas from "./views/Tareas";
import Finanzas from "./views/Finanzas";
import Certificados from "./views/Certificados";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider> */}
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/maestros"
              element={<Maestros />}
            />
            <Route
              path="/alumnos"
              element={<Alumnos />}
            />
            <Route
              path="/clases"
              element={<Clases />}
            />
            <Route
              path="/usuarios"
              element={<Usuarios />}
            />
            <Route
              path="/tareas"
              element={<Tareas />}
            />
            <Route
              path="/finanzas"
              element={<Finanzas />}
            />
            <Route
              path="/certificados"
              element={<Certificados />}
            />
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
