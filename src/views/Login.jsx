import fondoVideo2 from "/public/fondo2.webm";
import {useState} from "react";
import api from "../components/api";
import {useNavigate} from "react-router-dom";
import cursos from "../components/cursos";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const fetchUser = async () => {
		try {
			const response = await api.post("/me");
			if (response && response.data) {
				localStorage.setItem("user", JSON.stringify(response.data));
				return response.data;
			} else {
				throw new Error("Failed to fetch user");
			}
		} catch (error) {
			console.error(
				"Error fetching user:",
				error.response ? error.response.data : error.message
			);
			setError("Error fetching user data");
			return null;
		}
	};
	const fetchProgress = async () => {
		try {
			const response = await api.get("/user-progress");
			const progressData = response.data;

			Object.keys(localStorage).forEach((key) => {
				if (key.startsWith("Course")) {
					localStorage.removeItem(key);
				}
			});

			const courseProgress = {};
			const completedUnits = {};

			progressData.forEach((progress) => {
				const progressKey = `Course${progress.course_id}Unidad${progress.unit_id}`;
				// Guardar el progreso en localStorage
				localStorage.setItem(
					progressKey,
					Math.floor(progress.progress * 100).toString()
				);

				if (!completedUnits[progress.course_id]) {
					completedUnits[progress.course_id] = new Set();
				}

				// Si la unidad está completada, actualizar la información en localStorage
				if (progress.completed) {
					completedUnits[progress.course_id].add(progress.unit_id);

					// Asegurarse de que la fecha de finalización existe
					if (progress.finishDate) {
						const finishDate = new Date(progress.finishDate);

						if (!courseProgress[progress.course_id]) {
							courseProgress[progress.course_id] = finishDate;
						} else if (finishDate > courseProgress[progress.course_id]) {
							courseProgress[progress.course_id] = finishDate;
						}
					}
				}
			});

			// Verificar si todas las unidades del curso están completas
			cursos.forEach((course, index) => {
				const courseId = index; // Suponiendo que los IDs del curso comienzan en 1
				const totalUnits = course.units.length;
				const completedUnitCount = completedUnits[courseId]
					? completedUnits[courseId].size
					: 0;

				if (completedUnitCount === totalUnits) {
					localStorage.setItem(`Course${courseId}isFinished`, "true");
					const finishDateKey = `Course${courseId}finishedDate`;
					const finishDate = courseProgress[courseId];
					const formattedDate = finishDate.toLocaleDateString("en-GB"); // Formato DD/MM/YYYY
					console.log(
						`Saving finish date for Course ${courseId}: ${formattedDate}`
					);
					localStorage.setItem(finishDateKey, formattedDate);
				}
			});
		} catch (error) {
			console.error(
				"Error fetching user progress:",
				error.response?.data || error.message
			);
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await api.post("/auth/login", {email, password});
			localStorage.setItem("token", response.data.access_token);
			const user = await fetchUser();

			if (user.role === 1) {
				navigate("/admin/dashboard");
			} else {
				navigate("/estudiante/dashboard");
				await fetchProgress();
			}
		} catch (error) {
			if (
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.response.data.error
			) {
				setError(error.response.data.message);
				setError(error.response.data.error);
				console.log("Error", error);
			} else {
				setError("Error desconocido al iniciar sesión");
				console.log(error);
			}
		}
	};

	return (
		<div className="flex flex-row w-[100%] h-screen items-center">
			<div className="w-[65%] bg-gradient-to-r from-gray-500 to-gray-100/50 h-screen flex items-center">
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
					<div className="absolute top-0 left-0 w-[10rem] bg-white/70 p-[0.5rem] rounded-lg shadow-md shadow-black">
						<div>
							<img src="logo.png" className="w-full" />
						</div>
					</div>
				</a>
				<div className="flex items-center">
					<div className="flex justify-center">
						<span className="pl-[5rem] text-[25px] text-gray-900 w-[60%]">
							Una de las mejores inversiones es la Educación,{" "}
							<u>Cosecharás por años sus frutos!</u>
						</span>
					</div>
				</div>
			</div>
			<div className="w-[35%] flex items-center bg-gradient-to-t from-gray-200 to-white bg-opacity-90 h-screen border-l-2">
				<div className="login ">
					<div className="p-[2rem] m-[2rem] border border-gray-300 rounded-lg bg-white">
						<h1 className="mb-[1rem] text-[1.2rem]">Bienvenido</h1>
						<form onSubmit={handleLogin}>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="u"
								placeholder="Email"
								required="required"
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								name="p"
								placeholder="Contraseña"
								required="required"
							/>
							{error && <p className="text-[12px] text-red-500">{error}</p>}
							<div className="flex justify-between">
								<a
									href="/register"
									className="text-[12px] pl-[5px] text-[#5C80DB]"
								>
									<u>Registrate</u>
								</a>
							</div>
							<button
								type="submit"
								className="w-[100%] p-[0.5rem] px-[1.5rem] bg-[#006937] rounded-full text-[white] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim my-[1rem]"
							>
								<span className="textButAnim">Iniciar Sesión</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
