import Template from "../../components/Template";
import {ModalNew} from "../../components/ModalNew";
import {useState, useEffect} from "react";
import api from "../../components/api";
import cursos from "../../components/cursos";

export default function Alumnos() {
	const [showModalNew, setShowModalNew] = useState(false);
	const [alumnos, setAlumnos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, setLoading] = useState(true); // Nuevo estado para la carga

	useEffect(() => {
		fetchAlumnos();
	}, []);
	async function fetchAlumnos() {
		try {
			// Realiza las dos solicitudes de forma concurrente
			const [responseAlumnos, responseProgress] = await Promise.all([
				api.get("/users"),
				api.get("/progress"),
			]);

			const alumnosData = responseAlumnos.data;
			const progressData = responseProgress.data;

			// Mapear los alumnos con su progreso
			const alumnosConProgreso = alumnosData.map((alumno) => {
				const progress = calculateProgress(alumno.id, progressData);
				return {
					...alumno,
					progress,
				};
			});

			setAlumnos(alumnosConProgreso);
		} catch (error) {
			console.error(
				"Error fetching Alumnos data:",
				error.response?.data || error.message
			);
		} finally {
			setLoading(false); // Cambiar el estado de carga a falso después de obtener los datos
		}
	}

	function calculateProgress(userId, progressData) {
		const cursosTotales = cursos.length;
		let cursosCompletados = 0;

		cursos.forEach((curso) => {
			const unidadesCurso = curso.units.length;

			const unidadesCompletadas = progressData.filter((progress) => {
				const matchesUser = progress.user_id === userId;
				const matchesCourse = progress.course_id === curso.id;
				const isCompleted =
					progress.completed === true || progress.completed === 1;

				return matchesUser && matchesCourse && isCompleted;
			}).length;

			if (unidadesCompletadas === unidadesCurso) {
				cursosCompletados++;
			}
		});

		return `${cursosCompletados}/${cursosTotales}`;
	}

	// Componente de carga
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
							<div>
								<div className="p-[1rem]">
									<h1 className="text-[22px] py-[1rem] font-semibold">
										Lista de Alumnos
									</h1>
									<div className="bg-[#fff] shadow-lg p-[1rem]">
										<div className="flex justify-between items-center mb-[0.5rem]">
											<h3>Información de Alumnos</h3>
											<button
												id="create-new"
												type="button"
												className="bg-[#017cfe] text-[#fff] py-[0.3rem] px-[0.6rem] rounded-md"
												onClick={() => setShowModalNew(!showModalNew)}
											>
												Agregar Alumno
											</button>
										</div>
										<hr />
										<div>
											<div className="flex justify-center items-center my-[0.5rem]">
												<label htmlFor="search" className="mr-[1rem]">
													Buscar:
												</label>
												<input
													className="h-[2.3rem] border border-slate-300 rounded-md px-[1rem] text-[#797675]"
													id="search"
													name="search"
													value={searchTerm}
													onChange={(e) => setSearchTerm(e.target.value)}
												/>
											</div>
											<table className="w-[100%] table-auto">
												<thead>
													<tr className="text-left">
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															#
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															CI
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Nombre
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Email
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Teléfono
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Cursos Terminados
														</th>
														<th className="bg-[#fff] text-[#000632] h-[3rem] w-[7%]">
															Acciones
														</th>
													</tr>
												</thead>
												<tbody>
													{alumnos.map((alumno) => (
														<tr key={alumno.id}>
															<td className="h-[3rem] bg-[#f2f2f2]">
																{alumno.id}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2]">
																{alumno.ci}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2]">
																{alumno.name}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2]">
																{alumno.email}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2]">
																{alumno.phone}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2] text-center">
																{alumno.progress}
															</td>
															<td className="h-[3rem] bg-[#f2f2f2] flex justify-evenly items-center">
																<form action="" method="POST">
																	<input
																		type="hidden"
																		name="action"
																		value="delete"
																	/>
																	<input
																		type="number"
																		hidden
																		defaultValue={alumno.id}
																		name="id"
																	/>
																	<button
																		type="submit"
																		className="bg-[none] border-[none]"
																	>
																		<span className="material-symbols-outlined cursor-pointer text-[red]">
																			delete
																		</span>
																	</button>
																</form>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
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
						{name: "ci", label: "CI", style: ""},
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
						{name: "name", label: "Nombre", style: ""},
						{name: "email", label: "Email", style: ""},
						{name: "adress", label: "Dirección", style: ""},
						{name: "birth", label: "Nacimiento", style: ""},
					]}
					api="http://127.0.0.1:8000/api/alumnos"
				/>
			)}
		</>
	);
}
