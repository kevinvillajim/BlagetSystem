import Template from "../../components/Template";
import CourseCard from "../../components/CourseCard";
import cursos from "../../components/cursos";

export default function DashboardEstudiante() {
	const user = JSON.parse(localStorage.getItem("user"));

	if (!user) {
		setTimeout(() => {
			window.location.reload();
		}, 1000);
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
						<div className="flex flex-col md:grid md:grid-cols-4 gap-5">
							{cursos.map((curso, cursoIndex) => {
								let totalSum = curso.units.reduce((accumulator, unit) => {
									const unitProgress = localStorage.getItem(
										`Course${cursoIndex}${unit.value}`
									);
									return (
										accumulator +
										(unitProgress ? parseInt(unitProgress, 10) : 0)
									);
								}, 0);
								let average = totalSum / curso.units.length;
								average = parseInt(average);
								return (
									<CourseCard
										key={cursoIndex}
										title={curso.title}
										img={curso.img}
										description={curso.content}
										progress={average}
										link={curso.link}
										course={cursoIndex}
									/>
								);
							})}
						</div>
					}
				/>
			</div>
		</>
	);
}
