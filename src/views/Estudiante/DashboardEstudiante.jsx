import Template from "../../components/Template";
import CourseCard from "../../components/CourseCard";
import cursos from "../../components/cursos";

export default function DashboardEstudiante() {
  return (
    <>
      <div>
        <Template
          rol="Estudiante"
          content={
            <div className="grid grid-cols-4 gap-5">
              {cursos.map((curso, index) => {
                let totalSum = curso.units.reduce((accumulator, unit) => {
                  const unitProgress = localStorage.getItem(unit.value);
                  return (
                    accumulator +
                    (unitProgress ? parseInt(unitProgress, 10) : 0)
                  );
                }, 0);
                let average = totalSum / curso.units.length;
                average = parseInt(average);
                return (
                  <CourseCard
                    key={index}
                    title={curso.title}
                    img={curso.img}
                    description={curso.content}
                    progress={average}
                    link={curso.link}
                  />
                );
              })}
            </div>
          }
        />
      </div>
    </>
  );
}
