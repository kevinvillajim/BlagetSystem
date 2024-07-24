import Template from "../../components/Template";
import {useState, useEffect} from "react";
import api from "../../components/api";
import cursos from "../../components/cursos";

export default function Alumnos() {
	const [alumnos, setAlumnos] = useState([]);
	const [alumnosFiltrados, setAlumnosFiltrados] = useState([]);
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

			const nonAdminUsers = alumnosData.filter((user) => user.role !== 1);

			// Mapear los alumnos con su progreso
			const alumnosConProgreso = nonAdminUsers.map((alumno) => {
				const progress = calculateProgress(alumno.id, progressData);
				return {
					...alumno,
					progress,
				};
			});

			setAlumnos(alumnosConProgreso);
			setAlumnosFiltrados(alumnosConProgreso);
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

		return cursosCompletados > 0 ? (
			cursosCompletados === cursosTotales ? (
				<span className="text-[#fff] text-[12px] bg-[#33a24f] p-[0.2rem] rounded-md">
					Todos los cursos
				</span>
			) : (
				<span className="text-center text-[12px] bg-gray-200 p-[0.2rem] rounded-md">
					{cursosCompletados} / {cursosTotales}
				</span>
			)
		) : (
			<span className="text-[12px] bg-[#cba51a] p-[0.2rem] rounded-md">
				Ningún curso
			</span>
		);
	}

	useEffect(() => {
		if (searchTerm.trim() === "") {
			setAlumnosFiltrados(alumnos);
		} else {
			const filteredAlumnos = alumnos.filter(
				(alumno) =>
					alumno.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					alumno.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
					alumno.ci.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setAlumnosFiltrados(filteredAlumnos);
		}
	}, [searchTerm, alumnos]);

	const handleDeleteUser = async (userId) => {
		try {
			await api.delete(`/users/${userId}`);
			setAlumnos(alumnos.filter((alumno) => alumno.id !== userId));
			console.log(`Usuario con ID ${userId} eliminado.`);
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

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
													{alumnosFiltrados.map((alumno) => (
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
																	onClick={() => handleDeleteUser(alumno.id)}
																	className="w-[40px] h-[40px] p-2 rounded-full animatedBg2"
																>
																	<span className="material-symbols-outlined cursor-pointer text-[red]">
																		delete
																	</span>
																</button>
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
		</>
	);
}
