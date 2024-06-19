import Template from "../../components/Template";
import Certificados from "../../components/Certificados";
import cursos from "../../components/cursos";

export default function Certificado() {
  return (
    <>
      <div>
        <Template
          rol="Estudiante"
          content={
            <Certificados
              name="Kevin Villacreses"
              ci="1720598877"
              course={cursos[0].title}
              description={cursos[0].content}
              date="18/06/2024"
              calification={100}
            />
          }
        />
      </div>
    </>
  );
}
