import Template from "../../components/Template";
import Certificados from "../../components/Certificados";
import cursos from "../../components/cursos";

export default function Certificado() {
  const user = JSON.parse(localStorage.getItem("user"));
  const curso = 0;
  if (!user) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="loader-4">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <Template
          rol="Estudiante"
          content={
            <Certificados
              name={user.name}
              ci={user.ci}
              course={cursos[curso].title}
              description={cursos[curso].content}
              date={localStorage.getItem(`Course${curso}finishedDate`)}
              calification={100}
            />
          }
        />
      </div>
    </>
  );
}
