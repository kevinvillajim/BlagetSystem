import Template from "../../components/Template";
import Certificados from "../../components/Certificados";
import cursos from "../../components/cursos";
import user from "../../components/user";

export default function Certificado() {
	return (
		<>
			<div>
				<Template
					rol="Estudiante"
					content={
						<Certificados
							name={user.name + " " + user.lastname}
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
