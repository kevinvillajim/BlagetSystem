import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CursosRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const initialOpenIndex = localStorage.getItem("initialOpenIndex");

    if (initialOpenIndex !== null) {
      const index = parseInt(initialOpenIndex, 10);
      let url = "";

      switch (index) {
        case 0:
          url = "/estudiante/cursos/curso1/unidad1";
          break;
        case 1:
          url = "/estudiante/cursos/curso1/unidad2";
          break;
        case 2:
          url = "/estudiante/cursos/curso1/unidad3";
          break;
        // Agrega más casos según la cantidad de unidades que tengas
      }

      navigate(url);
    } else {
      // Si no hay un índice guardado, redirige a una unidad por defecto
      navigate("/estudiante/cursos/curso1/unidad1");
    }
  }, [navigate]);

  return null; // Este componente no necesita renderizar nada
};

export default CursosRedirect;
