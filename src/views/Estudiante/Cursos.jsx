import {useLayoutEffect} from "react";
import SideBarCourse from "../../components/SideBarCourse";
import HeaderCourse from "../../components/HeaderCourse";
import ContentCourse from "../../components/ContentCourse";
import cursos from "../../components/cursos";

const Cursos = ({curso, contenido}) => {
	useLayoutEffect(() => {
		const progressBar = document.querySelector(".progress__bar");

		const updateProgress = () => {
			if (progressBar) {
				const body = document.body;
				let scrollPos =
					(window.scrollY / (body.scrollHeight - window.innerHeight)) * 100;
				progressBar.style.width = `${scrollPos}%`;
				console.log(`Scroll progress: ${scrollPos}%`);
				requestAnimationFrame(updateProgress);
			}
		};

		updateProgress();

		// Clean up function
		return () => {
			if (progressBar) {
				progressBar.style.width = "0";
			}
		};
	}, []); // Empty dependency array ensures this effect runs only once

	return (
		<>
			<div>
				<HeaderCourse title={cursos[curso].title} />
				<div className="flex">
					<div className="w-[30%]">
						<SideBarCourse cursos={cursos[curso]} />
					</div>
					<div className="w-[100%] bg-[#191b20]">
						<ContentCourse
							subtitle={cursos[curso].title}
							content={<>{contenido}</>}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cursos;
