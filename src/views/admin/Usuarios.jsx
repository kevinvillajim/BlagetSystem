import Template from "../../components/Template";
import {arrayUsuarios} from "../../components/data";

export default function Usuarios() {
	return (
		<>
			<div>
				<Template
					content={
						<div>
							<div>
								<div className="p-[1rem]">
									<h1 className="text-[22px] py-[1rem] font-semibold">
										Lista de Usuarios
									</h1>
									<div className="bg-[#fff] shadow-lg p-[1rem]">
										<div className="flex justify-between items-center mb-[0.5rem]">
											<h3>Información de Usuarios</h3>
											<button
												id="create-new"
												type="button"
												className="bg-[#017cfe] text-[#fff] py-[0.3rem] px-[0.6rem] rounded-md"
											>
												Agregar Usuarios
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
															Email / usuario
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Permiso
														</th>
														<th className="bg-[#fff] text-[#343b40] h-[3rem]">
															Estado
														</th>
														<th className="bg-[#fff] text-[#000632] h-[3rem] w-[7%]">
															Acciones
														</th>
													</tr>
												</thead>
												<tbody>
													{arrayUsuarios.map((usuario) => {
														return (
															<tr className="usuario" key={usuario.id}>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{usuario.id}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{usuario.email}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{usuario.rol === 1 ? (
																		<span className="text-[12px] bg-[#cba51a] p-[0.2rem] rounded-md">
																			Administrador
																		</span>
																	) : usuario.rol === 2 ? (
																		<span className="text-[12px] bg-[#1ca0b4] p-[0.2rem] rounded-md text-[#fff]">
																			Maestro
																		</span>
																	) : (
																		<span className="text-[12px] bg-[#6f757e] p-[0.2rem] rounded-md text-[#fff]">
																			Alumno
																		</span>
																	)}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2]">
																	{usuario.estado ? (
																		<span className="text-[12px] bg-[#33a24f] p-[0.2rem] rounded-md text-[#fff]">
																			Activo
																		</span>
																	) : (
																		<span className="text-[12px] bg-[#cc3e4d] p-[0.2rem] rounded-md text-[#fff]">
																			Inactivo
																		</span>
																	)}
																</td>
																<td className="h-[3rem] bg-[#f2f2f2] flex justify-evenly items-center">
																	<span
																		data-id={usuario.id}
																		className="material-symbols-outlined cursor-pointer text-[#FFC300] edit-new"
																	>
																		edit
																	</span>
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
		</>
	);
}
