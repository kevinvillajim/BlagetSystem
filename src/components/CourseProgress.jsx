import {useState} from "react";

export default function CourseProgress({courseModule, totalValue, content}) {
	let value = totalValue;

	const getColor = (value) => {
		if (value <= 33) return "bg-red-500";
		if (value <= 66) return "bg-yellow-500";
		if (value <= 99) return "bg-green-500";
		return "bg-blue-500";
	};

	if (value > 100) {
		value = 100;
	}

	const [showContent, setShowContent] = useState(true);

	const color = getColor(value);
	return (
		<>
			<div className="bg-[#737272] border-b-2 border-[#ADADAD] px-[0.2rem] py-[1rem] px-[1.5rem]">
				<div className="flex justify-between">
					<span className="text-white font-bold">{courseModule}</span>
					<div
						className="w-[30px] h-[30px] rounded-md bg-[#909090] flex justify-center items-center cursor-pointer"
						onClick={() => setShowContent(!showContent)}
					>
						<span className="material-symbols-outlined text-white">
							{showContent ? "keyboard_arrow_down" : "keyboard_arrow_up"}
						</span>
					</div>
				</div>
				<div className="w-[100%]">
					<div className="flex gap-2 items-center mt-[0.3rem]">
						<div className="w-full rounded-full h-2 bg-gray-200">
							<div
								className={`${color} h-2 rounded-full`}
								style={{width: `${value}%`}}
							></div>
						</div>
						<div className="flex justify-end text-sm text-white">
							{totalValue}%
						</div>
					</div>
				</div>
				<div
					className={`text-white text-xs mt-[1rem] ${
						showContent ? "hidden" : "block"
					}`}
				>
					{content}
				</div>
			</div>
		</>
	);
}
