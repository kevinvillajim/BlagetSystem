export default function ContentCourse({
  subtitle,
  content,
  showModal,
  setShowModal,
}) {
  return (
    <>
      <div>
        <div className="p-[1rem] w-[100%] flex gap-3 bg-[#4a4a4a] text-white">
          <span
            className="material-symbols-outlined cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            menu_open
          </span>
          <span>{subtitle} - Curso Online</span>
        </div>
        <div className="p-[1rem]">{content}</div>
      </div>
    </>
  );
}
