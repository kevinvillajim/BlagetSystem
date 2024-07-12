import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import cursos from "../../components/cursos";

const CursosRedirect = ({curso}) => {
	const navigate = useNavigate();

	useEffect(() => {
		const initialOpenIndex = localStorage.getItem(
			`Course${curso}initialOpenIndex`
		);

		if (initialOpenIndex !== null) {
			const index = parseInt(initialOpenIndex, 10);
			let url = "";

			cursos[curso].units.forEach((unidad, i) => {
				if (i === index) {
					url = `/estudiante/cursos/curso${curso + 1}/unidad${i + 1}`;
				}
			});
			if (url === "") {
				url = `/estudiante/cursos/curso${curso + 1}/unidad1`;
			}

			navigate(url);
		} else {
			navigate(`/estudiante/cursos/curso${curso + 1}/unidad1`);
		}
	}, [navigate]);

	return null; // Este componente no necesita renderizar nada
};

export default CursosRedirect;
