import Template from "../../components/Template";
import Gallery from "../../components/Gallery";
import cursos from "../../components/cursos";

export default function DashboardEstudiante() {
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
						<div className="flex justify-center py-[2rem]">
							{localStorage.getItem("isFinished") ? (
								<div>
									{cursos.map((curso, index) => (
										<a key={index} href={`${curso.link}/certificado`}>
											<Gallery
												imgSrc={curso.img}
												altText={curso.title}
												title={curso.title}
											/>
										</a>
									))}
								</div>
							) : (
								<div className="flex justify-center">
									<p>Aún no tienes ningún certificado</p>
								</div>
							)}
						</div>
					}
				/>
			</div>
		</>
	);
}
