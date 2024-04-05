function Card({title, img, description}) {
	return (
		<>
			<div className="flex justify-center flex-col p-[1rem] bg-[#fff] w-[100%] rounded-lg shadow-black shadow-md">
				<h1 className="text-[30px] font-semibold flex justify-center">
					{title}
				</h1>
				<img
					src={img}
					className="my-[1.5rem] cursor-pointer imgCourses rounded-md"
				/>
				<p>{description}</p>
				<button className="bg-[black] px-3rem py-[1rem] rounded-full text-white mt-[1.5rem] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim">
					<span className="textButAnim">Conocer más</span>
				</button>
			</div>
		</>
	);
}

export default Card;
