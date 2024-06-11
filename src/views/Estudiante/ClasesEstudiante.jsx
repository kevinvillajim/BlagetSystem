import SideBarCourse from "../../components/SideBarCourse";
import HeaderCourse from "../../components/HeaderCourse";
import ContentCourse from "../../components/ContentCourse";
import {useState} from "react";

export default function ClasesEstudiante() {
	const [showModal, setShowModal] = useState(true);
	return (
		<>
			<div>
				<HeaderCourse course="Redes" />
				<div className="flex">
					<div className={`w-[30%] ${showModal ? "block" : "hidden"}`}>
						<SideBarCourse />
					</div>
					<div className="w-[100%]">
						<ContentCourse
							title="Redes esto es un titulo"
							content="hola"
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
