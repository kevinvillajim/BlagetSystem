export default function ContentCourse({
	title,
	content,
	showModal,
	setShowModal,
}) {
	return (
		<>
			<div>
				<div className="p-[1rem] w-[100%] flex gap-3 bg-[#353535] text-white">
					<span
						className="material-symbols-outlined cursor-pointer"
						onClick={() => setShowModal(!showModal)}
					>
						menu_open
					</span>
					<span>{title}</span>
				</div>
				<div className="p-[1rem]">{content}</div>
			</div>
		</>
	);
}
