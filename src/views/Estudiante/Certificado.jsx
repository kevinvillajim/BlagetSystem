import Template from "../../components/Template";
import Certificados from "../../components/Certificados";
import cursos from "../../components/cursos";

export default function Certificado() {
	const user = JSON.parse(localStorage.getItem("user"));
	if (!user) {
		return (
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="loader-4">
					<div className="loader-square"></div>
					<div className="loader-square"></div>
					<div className="loader-square"></div>
					<div className="loader-square"></div>
					<div className="loader-square"></div>
					<div className="loader-square"></div>
					<div className="loader-square"></div>
				</div>
			</div>
		);
	}
	return (
		<>
			<div>
				<Template
					rol="Estudiante"
					content={
						<Certificados
							name={user.name}
							ci={user.ci}
							course={cursos[0].title}
							description={cursos[0].content}
							date="18/06/2024"
							calification={100}
						/>
					}
				/>
			</div>
		</>
	);
}
