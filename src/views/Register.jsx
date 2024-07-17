import fondoVideo2 from "/public/fondo2.webm";
import {useState} from "react";
import api from "../components/api";
import {useNavigate} from "react-router-dom";

export default function Register() {
	const [email, setEmail] = useState("");
	const [ci, setCi] = useState("");
	const [phone, setphone] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setPassword_confirmation] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			const response = await api.post("/me");
			localStorage.setItem("user", JSON.stringify(response.data));
		} catch (error) {
			console.error("Error fetching user:", error.response.data);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post("/auth/register", {
				ci,
				phone,
				name,
				email,
				password,
				password_confirmation,
			});
			localStorage.setItem("token", response.data.access_token);
			await fetchUser();
			setTimeout(() => {
				const user = JSON.parse(localStorage.getItem("user"));
				if (user) {
					if (user.role === 1) {
						navigate("/admin/dashboard");
					} else if (user.role === 2) {
						navigate("/estudiante/dashboard");
					}
				} else {
					console.error("User data not found in localStorage.");
				}
			}, 1000);
			setError(null);
			// Limpiar el estado de error después de un registro exitoso
			setError(null);
		} catch (error) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				setError(error.response.data.message);
			} else {
				setError("Error desconocido al registrar usuario");
			}
		}
	};

	return (
		<div className="flex flex-row w-[100%] h-screen items-center">
			<div className="w-[35%] flex items-center bg-gradient-to-t from-gray-200 to-white bg-opacity-90 h-screen border-r-2">
				<div className="login pl-[2.5rem]">
					<div className="p-[2rem] m-[2rem] border border-gray-300 rounded-lg bg-white">
						<h1 className="mb-[1rem] text-[1.2rem]">Registro</h1>
						<form onSubmit={handleRegister}>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								name="name"
								placeholder="Nombre Completo"
								required="required"
							/>
							<input
								type="text"
								value={ci}
								onChange={(e) => setCi(e.target.value)}
								name="ci"
								placeholder="Cedula de identidad"
								required="required"
							/>
							<input
								type="text"
								value={phone}
								onChange={(e) => setphone(e.target.value)}
								name="phone"
								placeholder="Teléfono (Opcional)"
							/>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								placeholder="Email"
								required="required"
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								placeholder="Contraseña"
								required="required"
							/>
							<input
								type="password"
								value={password_confirmation}
								onChange={(e) => setPassword_confirmation(e.target.value)}
								name="password_confirmation"
								placeholder="Repite tu contraseña"
								required="required"
							/>
							{error && <p className="text-[12px] text-red-500">{error}</p>}
							<div className="flex justify-between">
								<span className="text-[12px] pl-[5px] text-gray-400">
									Ya eres miembro?
								</span>
								<a
									href="/login"
									className="text-[12px] pr-[5px] text-[#5C80DB]"
								>
									<u>Iniciar Sesión</u>
								</a>
							</div>
							<button
								type="submit"
								className="w-[100%] p-[0.5rem] px-[1.5rem] bg-[#006937] rounded-full text-[white] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim my-[1rem]"
							>
								<span className="textButAnim">Crear Cuenta</span>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="w-[65%] bg-gradient-to-r from-gray-100/50 to-gray-500 h-screen flex items-center">
				<video
					src={fondoVideo2}
					autoPlay
					loop
					muted
					className="absolute inset-0 w-full h-full object-cover"
					style={{
						zIndex: -1,
						opacity: 100,
						filter: "blur(2px)",
					}}
				></video>
				<a href="/home">
					<div className="absolute top-0 right-0 w-[10rem] bg-white/70 p-[0.5rem] rounded-lg shadow-md shadow-black">
						<div>
							<img src="logo.png" className="w-full" />
						</div>
					</div>
				</a>
				<div className="flex items-center">
					<div className="flex justify-center">
						<span className="pr-[5rem] text-[25px] text-gray-900 w-[60%]">
							Una de las mejores inversiones es la Educación,{" "}
							<u>Cosecharás por años sus frutos!</u>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
