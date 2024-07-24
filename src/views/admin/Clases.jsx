import Template from "../../components/Template";
import {useState, useEffect} from "react";
import {ModalNew} from "../../components/ModalNew";
import api from "../../components/api";
import cursos from "../../components/cursos";

export default function Clases() {
	const [showModalNew, setShowModalNew] = useState(false);
	const [alumnosConProgreso, setAlumnosConProgreso] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredCursos, setFilteredCursos] = useState(cursos);
	const [loading, setLoading] = useState(true); // Nuevo estado para la carga

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const [responseUsers, responseProgress] = await Promise.all([
				api.get("/users"),
				api.get("/progress"),
			]);

			const usersData = responseUsers.data;
			const progressData = responseProgress.data;

			const nonAdminUsers = usersData.filter((user) => user.role !== 1);

			const alumnosConProgreso = nonAdminUsers.map((user) => {
				const progress = calculateProgress(user.id, progressData);
				return {
					...user,
					progress,
				};
			});

			setAlumnosConProgreso(alumnosConProgreso);
		} catch (error) {
			console.error(
				"Error fetching data:",
				error.response?.data || error.message
			);
		} finally {
			setLoading(false);
		}
	}

	function calculateProgress(userId, progressData) {
		const cursosCompletados = [];
		cursos.forEach((curso) => {
			const unidadesCurso = curso.units.length;
			const unidadesCompletadas = progressData.filter(
				(progress) =>
					progress.user_id === userId &&
					progress.course_id === curso.id &&
					(progress.completed === true || progress.completed === 1)
			).length;

			if (unidadesCompletadas === unidadesCurso) {
				cursosCompletados.push(curso.title);
			}
		});

		return cursosCompletados;
	}

	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);

		// Filtrar cursos basado en el término de búsqueda
		const filteredCursos = cursos.filter((curso) =>
			curso.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredCursos(filteredCursos);
	};

	if (loading) {
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
					rol="admin"
					content={
						<div>
							<div className="p-[1rem]">
								<h1 className="text-[22px] py-[1rem] font-semibold">
									Lista de Clases
								</h1>
								<div className="bg-[#fff] shadow-lg p-[1rem]">
									<hr />
									<div className="flex justify-center items-center my-[0.5rem]">
										<label htmlFor="search" className="mr-[1rem]">
											Buscar:
										</label>
										<input
											className="h-[2.3rem] border border-slate-300 rounded-md px-[1rem] text-[#797675]"
											id="search"
											name="search"
											value={searchTerm}
											onChange={handleSearch}
										/>
									</div>
									<table className="w-[100%] table-auto">
										<thead>
											<tr className="text-left">
												<th className="bg-[#fff] text-[#343b40] h-[3rem]">#</th>
												<th className="bg-[#fff] text-[#343b40] h-[3rem]">
													Curso
												</th>
												<th className="bg-[#fff] text-[#343b40] h-[3rem]">
													Alumnos Finalizados
												</th>
												<th className="bg-[#fff] text-[#343b40] h-[3rem]">
													Alumnos en Curso
												</th>
											</tr>
										</thead>
										<tbody>
											{filteredCursos.map((clase, index) => {
												const alumnosTerminaron = alumnosConProgreso.filter(
													(alumno) => alumno.progress.includes(clase.title)
												);
												const alumnosEnCurso =
													alumnosConProgreso.length - alumnosTerminaron.length;

												return (
													<tr key={clase.id}>
														<td className="h-[3rem] bg-[#f2f2f2]">
															{index + 1}
														</td>
														<td className="h-[3rem] bg-[#f2f2f2]">
															{clase.title}
														</td>
														<td className="h-[3rem] bg-[#f2f2f2]">
															{alumnosTerminaron &&
															alumnosTerminaron.length > 0 ? (
																alumnosTerminaron.length ===
																alumnosConProgreso.length ? (
																	<span className="text-[#fff] text-[12px] bg-[#33a24f] p-[0.2rem] rounded-md">
																		Todos los alumnos
																	</span>
																) : (
																	<span className="text-center text-[12px] bg-gray-200 p-[0.2rem] rounded-md">
																		{alumnosTerminaron.length} /{" "}
																		{alumnosConProgreso.length}
																	</span>
																)
															) : (
																<span className="text-[12px] bg-[#cba51a] p-[0.2rem] rounded-md">
																	Sin alumnos
																</span>
															)}
														</td>
														<td className="h-[3rem] bg-[#f2f2f2]">
															{alumnosEnCurso === 0 ? (
																<span className="text-[12px] bg-[#cba51a] p-[0.2rem] rounded-md">
																	Sin alumnos
																</span>
															) : alumnosEnCurso ===
															  alumnosConProgreso.length ? (
																<span className="text-[#fff] text-[12px] bg-[#33a24f] p-[0.2rem] rounded-md">
																	Todos los alumnos
																</span>
															) : (
																<span className="text-center text-[12px] bg-gray-200 p-[0.2rem] rounded-md">
																	{alumnosEnCurso} / {alumnosConProgreso.length}
																</span>
															)}
														</td>
													</tr>
												);
											})}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					}
				/>
			</div>
			{showModalNew && (
				<ModalNew
					setShowModalNew={setShowModalNew}
					formObject={[
						{
							name: "id",
							label: "",
							style: "hidden",
							value: localStorage.getItem("id"),
						},
						{
							name: "usuario_creacion",
							label: "",
							style: "hidden",
							value: localStorage.getItem("id"),
						},
						{
							name: "usuario_modificacion",
							label: "",
							style: "hidden",
							value: localStorage.getItem("id"),
						},
						{
							name: "class",
							label: "Clase",
							style: "",
						},
						{
							name: "teacher",
							label: "Maestro",
							style: "",
						},
					]}
					api="http://127.0.0.1:8000/api/alumnos"
				/>
			)}
		</>
	);
}
