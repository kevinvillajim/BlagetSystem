import CarrouselTestimonies from "./CarruselTestimonies.jsx";
import carruselTestimonies from "./carruselTestimonies.js";

function Testimonios() {
	return (
		<>
			<div className="flex justify-center items-center h-[70%]">
				<div className="p-[5rem] testimonios-container">
					{/* <h1 className="text-[30px]">Testimonios</h1> */}
					<div className="flex justify-center">
						<CarrouselTestimonies
							photos={carruselTestimonies}
							currentPhotoIndex={0}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Testimonios;
