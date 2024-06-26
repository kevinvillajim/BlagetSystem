import { useState, useEffect } from "react";
import CourseProgress from "./CourseProgress";
import Material from "./Material";

export default function SideBarCourse({ cursos }) {
  const [toggle, setToggle] = useState(true);
  const [initialOpenIndex, setInitialOpenIndex] = useState(() => {
    const savedIndex = localStorage.getItem("initialOpenIndex");
    return savedIndex !== null ? parseInt(savedIndex) : 0;
  });

  useEffect(() => {
    const savedIndex = localStorage.getItem("initialOpenIndex");
    if (savedIndex !== null) {
      setInitialOpenIndex(parseInt(savedIndex));
    }
  }, []); // Se ejecuta solo una vez al cargar el componente

  const handleCourseProgressClick = (index) => {
    console.log("Clicked on CourseProgress with index:", index);
    setInitialOpenIndex(index);
    localStorage.setItem("initialOpenIndex", index.toString());
  };

  return (
    <>
      <div className="h-screen bg-[#737272] overflow-auto">
        <header className="flex justify-center">
          <div
            className={`bg-[#353535] py-[1rem] px-[1.5rem] flex gap-2 items-center w-[100%] flex justify-center cursor-pointer ${
              toggle ? "border-b-4 border-[#22c55e]" : ""
            }`}
            onClick={() => {
              setToggle(true);
            }}
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
            onClick={() => {
              setToggle(false);
            }}
          >
            <span className="material-symbols-outlined text-[white]">
              import_contacts
            </span>
            <span className="text-[white]">Material</span>
          </div>
        </header>
        <div className={`w-[100%] ${toggle ? "inline" : "hidden"}`}>
          {cursos.units.map((course, index) => (
            <CourseProgress
              key={index}
              courseUrl={course.url}
              courseUnit={course.unit}
              totalValue={
                localStorage.getItem(course.value)
                  ? parseInt(localStorage.getItem(course.value))
                  : 0
              }
              content={course.modules}
              defaultOpen={index !== initialOpenIndex}
              onClick={() => {
                handleCourseProgressClick(index);
              }}
            />
          ))}
        </div>
        <div className={`${!toggle ? "block w-[100%]" : "hidden"}`}>
          {cursos.material.map((material, index) => (
            <Material
              key={index}
              title={material.title}
              descripcion={material.descripcion}
              img={material.img}
              archivo={material.archivo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
