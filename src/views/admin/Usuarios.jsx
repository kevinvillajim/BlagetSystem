import Template from "../../components/Template";
import {ModalNew} from "../../components/ModalNew";
import {ModalEdit} from "../../components/ModalEdit";
import {useState, useEffect} from "react";
import api from "../../components/api";

export default function Usuarios() {
	const [showModalNew, setShowModalNew] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [loading, setLoading] = useState(true);
	const [usersData, setUsersData] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await api.get("/users");
			setUsersData(response.data);
			setFilteredUsers(response.data); // Mantenemos una copia de respaldo
		} catch (error) {
			console.error(
				"Error fetching Users data:",
				error.response?.data || error.message
			);
		} finally {
			setLoading(false);
		}
	}

	const handleCreateUser = async (newUser) => {
		try {
			const response = await api.post("/users", newUser);
			setUsersData([...usersData, response.data]);
			setFilteredUsers([...usersData, response.data]); // Actualizamos la copia de respaldo
			window.location.reload();
		} catch (error) {
			console.error(
				"Error creating user:",
				error.response?.data || error.message
			);
		}
	};

	const handleEditUser = async (id, updatedData) => {
		try {
			const response = await api.put(`/users/${id}`, updatedData);
			setUsersData(
				usersData.map((user) => (user.id === id ? response.data : user))
			);
			setFilteredUsers(
				filteredUsers.map((user) => (user.id === id ? response.data : user))
			); // Actualizamos la copia de respaldo
		} catch (error) {
			console.error(
				"Error updating user:",
				error.response?.data || error.message
			);
		}
	};

	const handleEditClick = (user) => {
		setSelectedUser(user);
		setShowModalEdit(true);
	};

	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		setSearchTerm(searchTerm);

		// Filtrar usuarios basado en el término de búsqueda
		const filteredUsers = usersData.filter((user) =>
			user.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(filteredUsers);
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
										className="bg-[#017cfe] text-[#fff] py-[0.3rem] px-[0.6rem] rounded-md animatedBgButtons"
										onClick={() => setShowModalNew(!showModalNew)}
									>
										Agregar Usuarios
									</button>
								</div>
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
												Email / Usuario
											</th>
											<th className="bg-[#fff] text-[#343b40] h-[3rem]">Rol</th>
											<th className="bg-[#fff] text-[#343b40] h-[3rem]">
												Estado
											</th>
											<th className="bg-[#fff] text-[#000632] h-[3rem] w-[7%]">
												Acciones
											</th>
										</tr>
									</thead>
									<tbody>
										{filteredUsers.map((usuario) => (
											<tr className="usuario" key={usuario.id}>
												<td className="h-[3rem] bg-[#f2f2f2]">{usuario.id}</td>
												<td className="h-[3rem] bg-[#f2f2f2]">
													{usuario.email}
												</td>
												<td className="h-[3rem] bg-[#f2f2f2]">
													{usuario.role === 1 ? (
														<span className="text-[12px] bg-[#cba51a] p-[0.2rem] rounded-md">
															Administrador
														</span>
													) : usuario.role === 2 ? (
														<span className="text-[12px] bg-[#1ca0b4] p-[0.2rem] rounded-md text-[#fff]">
															Alumno
														</span>
													) : (
														<span className="text-[12px] bg-[#6f757e] p-[0.2rem] rounded-md text-[#fff]">
															Maestro
														</span>
													)}
												</td>
												<td className="h-[3rem] bg-[#f2f2f2]">
													{usuario.active ? (
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
														className="material-symbols-outlined cursor-pointer text-[#FFC300] edit-new w-[40px] h-[40px] p-2 rounded-full animatedBg2"
														onClick={() => handleEditClick(usuario)}
													>
														edit
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
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
							name: "name",
							label: "Nombre",
							style: "",
						},
						{
							name: "ci",
							label: "CI",
							style: "",
						},
						{
							name: "email",
							label: "Email",
							style: "",
						},
						{
							name: "password",
							label: "Contraseña",
							style: "",
						},
						{
							name: "password_confirmation",
							label: "Repite la Contraseña",
							style: "",
						},
					]}
					api="/users"
					handleCreateUser={handleCreateUser}
				/>
			)}
			{showModalEdit && selectedUser && (
				<ModalEdit
					setShowModalEdit={setShowModalEdit}
					user={selectedUser}
					handleEditUser={handleEditUser}
				/>
			)}
		</>
	);
}
