import SideBarCourse from "../../components/SideBarCourse";
import HeaderCourse from "../../components/HeaderCourse";
import ContentCourse from "../../components/ContentCourse";
import {useState} from "react";
import cursos from "../../components/cursos";

export default function ClasesEstudiante() {
	const [showModal, setShowModal] = useState(true);
	return (
		<>
			<div>
				<HeaderCourse title={cursos.curso1.title} />
				<div className="flex">
					<div className={`w-[30%] ${showModal ? "block" : "hidden"}`}>
						<SideBarCourse cursos={cursos} />
					</div>
					<div className="w-[100%]">
						<ContentCourse
							subtitle={cursos.curso1.title}
							content={cursos.curso1.content}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
