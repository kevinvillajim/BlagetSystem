import {useState} from "react";
import CourseProgress from "./CourseProgress";
import Material from "./Material";

export default function SideBarCourse() {
	const [toggle, setToggle] = useState(true);
	return (
		<>
			<div className="h-screen bg-[#737272] overflow-auto">
				<header className="flex justify-center">
					<div
						className={`bg-[#353535] py-[1rem] px-[1.5rem] flex gap-2 items-center w-[100%] flex justify-center cursor-pointer ${
							toggle ? "border-b-4 border-[#22c55e]" : ""
						}`}
						onClick={() => setToggle(true)}
					>
						<span className="material-symbols-outlined text-[white]">
							library_books
						</span>
						<span className="text-[white]">Contenido del Curso</span>
					</div>
					<div
						className={`bg-[#353535] py-[1rem] px-[1.5rem] flex gap-2 items-center w-[100%] flex justify-center cursor-pointer ${
							!toggle ? "border-b-4 border-[#22c55e]" : ""
						}`}
						onClick={() => setToggle(false)}
					>
						<span className="material-symbols-outlined text-[white]">
							import_contacts
						</span>
						<span className="text-[white]">Material</span>
					</div>
				</header>
				<div className={`w-[100%] ${toggle ? "inline" : "hidden"}`}>
					<CourseProgress
						courseModule="Hola"
						totalValue={90}
						content="Soy un modulo"
					/>
					<CourseProgress
						courseModule="Hola 2"
						totalValue={80}
						content="Soy otro modulo"
					/>
					<CourseProgress
						courseModule="Hola"
						totalValue={90}
						content="Soy un modulo"
					/>
					<CourseProgress
						courseModule="Hola 2"
						totalValue={80}
						content="Soy otro modulo"
					/>
					<CourseProgress
						courseModule="Hola"
						totalValue={90}
						content="Soy un modulo"
					/>
					<CourseProgress
						courseModule="Hola 2"
						totalValue={80}
						content="Soy otro modulo"
					/>
					<CourseProgress
						courseModule="Hola"
						totalValue={90}
						content="Soy un modulo"
					/>
					<CourseProgress
						courseModule="Hola"
						totalValue={90}
						content="Soy un modulo"
					/>
				</div>
				<div className={`${!toggle ? "block w-[100%]" : "hidden"}`}>
					<Material
						title="Tu cara"
						descripcion="hola"
						img="/curso1.png"
						archivo="/README.md"
					/>
				</div>
			</div>
		</>
	);
}
