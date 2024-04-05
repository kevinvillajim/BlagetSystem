import Header from "../components/Header.jsx";
import Carrusel from "../components/Carrusel.jsx";
import Card from "../components/Card.jsx";
import About from "../components/About.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Testimonios from "../components/Testimonios.jsx";
import Footer from "../components/Footer.jsx";
import carruselInformation from "../components/carruselInformation.js";
import fondoVideo from "/public/fondo3.mp4";
import {useState} from "react";

function Home() {
	const [switchForm, setSwitchForm] = useState(false);
	function switchFormHandler() {
		setSwitchForm(!switchForm);
	}
	return (
		<>
			<Header />
			<div>
				<Carrusel photos={carruselInformation} currentPhotoIndex={0} />
			</div>
			<div className="flex justify-between items-center px-[5rem] relative arbitraje-bg">
				<video
					src={fondoVideo}
					autoPlay
					loop
					muted
					className="absolute inset-0 w-full h-full object-cover"
					style={{
						zIndex: -1,
						opacity: 100,
						filter: "blur(0px)",
					}}
				></video>
				<div className="flex justify-between items-center arbitraje-container">
					<div className="w-[50%] arbitraje-text-container">
						<h1 className="text-[50px] arbitraje-title">
							ARBITRAJE DEPORTIVO?
						</h1>
						<p className="text-[30px] arbitraje-text">
							La manera específica de siempre percibir un ingreso cubriendo
							todos los posibles resultados entre dos casas de apuestas en
							cualquier deporte.
						</p>
						<p className="text-[15px] my-[1rem] arbitraje-sub">
							Conviértete en una máquina de hacer dinero
						</p>
						<div className="flex justify-center arbitraje-btn">
							<button className="bg-[black] text-[white] rounded-full py-[1rem] px-[30%] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim">
								<span className="textButAnim">Inscríbete</span>
							</button>
						</div>
					</div>
					<div className="w-[400px] arbitraje-img">
						<img src="img1.png" className="w-[100%] h-[100%] img-carr" />
					</div>
				</div>
			</div>
			<div className="bg-[#b1b1b1] px-[5rem] py-[3rem] cards-container">
				{/* <h1 className="text-[25px] py-[1rem]">Cursos Disponibles</h1> */}
				<div className="grid grid-cols-3 gap-12 cards">
					<Card
						title="Curso Online"
						img="curso1.png"
						description="Rentabiliza tu hobby, aprende a ganarle a las casas de apuestas con las SUREBETS. 30 Horas de Conocimiento puro + Certificación"
					/>
					<Card
						title="Curso Hibrido"
						img="curso2.png"
						description="Si deseas dar un paso mas allá y quieres volverte un experto en los trucos para ganar extras, aprovecha 15 horas virtuales + 15 Presenciales + Certificación"
					/>
					<Card
						title="Seminario PRO Presencial"
						img="curso3.png"
						description="Conviertete en un profesional en SUREBETS y ganale al sistema, 96 horas de clases presenciales + Certificación, Aprende todos los trucos y vuelvete un maestro haciendo dinero."
					/>
				</div>
			</div>
			<img className="w-[screen]" src="divisorInvertido.png" />
			<About />
			<img className="w-[screen]" src="divisor.png" />
			<Testimonios />
			<div className="bg-[#E6E6E6] p-[5rem] cont">
				<div>
					<h1>Contáctanos</h1>
					<div className="flex py-[2rem] px-[4rem] flex-col bg-[white] rounded-2xl contactos-container">
						<div className="flex py-[2rem] flex-row justify-center">
							<div className="flex gap-6 justify-center bg-[#E6E6E6] rounded-full w-[40%] buttons-container">
								<div>
									<a
										id="whatsapp-link"
										href="https://api.whatsapp.com/send?phone=593983583620&text=Buenas%20tardes, me contacto desde tu pagina web"
										target="_blank"
									>
										<div id="whatsapp-btn">
											<WhatsAppIcon
												sx={{width: "45px", height: "45px", color: "#fff"}}
											/>
										</div>
									</a>
								</div>
								<div>
									<a
										id="facebook-link"
										href="https://www.facebook.com/davidalejandro.guevaraverduga"
										target="_blank"
									>
										<div id="facebook-btn">
											<FacebookIcon
												sx={{width: "45px", height: "45px", color: "#fff"}}
											/>
										</div>
									</a>
								</div>
								<div>
									<a
										id="instagram-link"
										href="https://www.instagram.com/"
										target="_blank"
									>
										<div id="instagram-btn">
											<InstagramIcon
												sx={{width: "45px", height: "45px", color: "#fff"}}
											/>
										</div>
									</a>
								</div>
								<div>
									<a
										id="tiktok-link"
										href="https://www.instagram.com/"
										target="_blank"
									>
										<div id="tiktok-btn">
											<img src="tiktok.svg" className="w-[45px]" />
										</div>
									</a>
								</div>
								<div>
									<a id="email-link" onClick={switchFormHandler}>
										<div id="email-btn">
											<EmailIcon
												sx={{width: "45px", height: "45px", color: "#fff"}}
											/>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className={`px-[3rem] ${switchForm ? "inline" : "hidden"}`}>
							<form>
								<div className="form-container">
									<div className="flex flex-col gap-3">
										<label htmlFor="nombre">Nombre Completo</label>
										<input
											className="border-2 w-[25rem] form-name"
											type="text"
											id="nombre"
											name="nombre"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="email">Email</label>
										<input
											className="border-2 w-[15rem] form-email"
											type="email"
											id="email"
											name="email"
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="telefono">Whatsapp</label>
										<input
											className="border-2"
											type="phone"
											id="telefono"
											name="telefono"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="mensaje">Mensaje</label>
									<textarea
										id="mensaje"
										name="mensaje"
										className="h-[10rem] w-full border-2"
									></textarea>
								</div>
								<div className="flex flex-col gap-3 form-button">
									<input
										className="px-[4rem] py-[1rem] bg-black rounded-full text-[white]"
										type="submit"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Home;
