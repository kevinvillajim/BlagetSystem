import Template from "../../components/Template";
import {ModalNew} from "../../components/ModalNew";
import {arrayAlumnos} from "../../components/data";
import {useState} from "react";

export default function Alumnos() {
	const [showModalNew, setShowModalNew] = useState(false);
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
															Dirección
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Nacimiento
														</th>
														<th className="bg-[#fff] text-[#000632] h-[3rem] w-[7%]">
															Acciones
														</th>
													</tr>
												</thead>
												<tbody>
													{arrayAlumnos.map((alumno) => {
														return (
															<tr className="usuario" key={alumno.id}>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.id}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.ci}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.nombre}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.email}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.direccion}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{alumno.nacimiento}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2] flex justify-evenly items-center">
																	<span
																		data-maestro-id={alumno.id}
																		className="material-symbols-outlined cursor-pointer text-[#FFC300] edit-new"
																	>
																		edit
																	</span>
																	<form action="" method="POST">
																		<input
																			type="hidden"
																			name="action"
																			value="delete"
																		/>
																		<input
																			type="number"
																			hidden
																			value={alumno.id}
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
														);
													})}
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
						{
							name: "name",
							label: "Nombre",
							style: "",
						},
						{
							name: "email",
							label: "Email",
							style: "",
						},
						{
							name: "adress",
							label: "Dirección",
							style: "",
						},
						{
							name: "birth",
							label: "Nacimiento",
							style: "",
						},
					]}
					api="http://127.0.0.1:8000/api/alumnos"
				/>
			)}
		</>
	);
}
