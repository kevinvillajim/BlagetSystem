import Cursos from "./Cursos.jsx";
import Banner from "../../components/Banner.jsx";
import Title from "../../components/Title.jsx";
import Paragraph from "../../components/Paragraph.jsx";
import Image from "../../components/Image.jsx";
import Quiz from "../../components/Quiz.jsx";

export default function Unidad1() {
  return (
    <>
      <Cursos
        curso={0}
        contenido={
          <div className="h-[38rem] overflow-auto">
            <Banner
              img="/banner1.jpg"
              title="Unidad 1: Definiciones Importantes"
            />
            <Title title="1.1 Datos Personales" />
            <Paragraph p="Los datos personales son cualquier información que se refiere a una persona física identificada o identificable. Esto incluye datos como el nombre, dirección, número de identificación, datos de ubicación, dirección de correo electrónico, número de teléfono, así como información más sensible como datos de salud, origen étnico, opiniones políticas, creencias religiosas y datos biométricos. Por ejemplo, el número de la seguridad social de una persona, su dirección IP (en ciertos contextos), o su historial médico son considerados datos personales porque permiten identificar directa o indirectamente a una persona. La protección de estos datos es fundamental para preservar la privacidad y los derechos de los individuos." />
            <Image img="/dp1.png" />
            <Title title="1.2 Datos Sensibles" />
            <Paragraph p="Los datos sensibles son un tipo específico de datos personales que revelan información particularmente delicada y cuyo tratamiento inadecuado puede afectar significativamente los derechos y libertades de las personas. Estos datos incluyen aspectos como el origen racial o étnico, opiniones políticas, creencias religiosas o filosóficas, afiliación sindical, datos genéticos, datos biométricos destinados a identificar de manera unívoca a una persona física, datos relativos a la salud, vida sexual u orientación sexual de una persona. Debido a su naturaleza, los datos sensibles están sujetos a un nivel más alto de protección y regulaciones estrictas para asegurar su confidencialidad y uso adecuado." />
            <Image img="/ds1.png" />
            <div className="my-[5rem] bg-gray-800 px-[5rem]">
              <Quiz
                questions={[
                  {
                    question: "¿Qué es un dato personal?",
                    options: [
                      "Información sobre empresas",
                      "Cualquier información que se refiere a una persona física identificada o identificable",
                      "Información sobre objetos inanimados",
                    ],
                    answer: 2,
                  },
                  {
                    question: "¿Qué son datos sensibles?",
                    options: [
                      "Datos sobre las opiniones políticas de una persona",
                      "Datos sobre el clima",
                      "Datos sobre las transacciones comerciales",
                    ],
                    answer: 1,
                  },
                  {
                    question:
                      "¿Cuál de los siguientes ejemplos sería considerado un dato personal?",
                    options: [
                      "La dirección IP de un dispositivo en ciertos contextos",
                      "El número de registro de un automóvil",
                      "Las estadísticas de producción de una fábrica",
                    ],
                    answer: 1,
                  },
                  {
                    question:
                      "¿Cuál es la característica principal que diferencia a los datos sensibles de otros datos personales?",
                    options: [
                      "Incluyen información financiera únicamente.",
                      "Son datos que pueden ser compartidos libremente sin restricciones.",
                      "Su tratamiento inadecuado puede afectar significativamente los derechos y libertades de las personas.",
                    ],
                    answer: 3,
                  },
                ]}
              />
            </div>
          </div>
        }
      />
    </>
  );
}
