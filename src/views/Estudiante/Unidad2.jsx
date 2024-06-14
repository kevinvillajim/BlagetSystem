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
              img="/banner2.webp"
              title="Unidad 2: Integrantes del sistema de protección de datos personales"
            />
            <Title title="2.1 Titular" />
            <Paragraph p="El titular de datos personales es la persona física a quien pertenecen los datos que están siendo procesados o utilizados por una entidad u organización. Es decir, es la persona a la que se refieren los datos y cuya identidad puede ser determinada o está determinada. Por ejemplo en 'Usuarios de servicios en línea:' Cuando una persona crea una cuenta en una plataforma digital (como redes sociales, servicios de correo electrónico, etc.), se convierte en titular de los datos que proporciona durante el registro." />
            <Image img="/usuario.jpg" />
            <Title title="2.2 Responsable de tratamiento de datos personales" />
            <Paragraph p="Persona natural o jurídica, pública o privada, u otro organismo, que solo o juntamente con otros decide sobre la finalidad y el tratamiento de datos personales, Es decir, es quien decide cómo y para qué se recogen, utilizan y protegen los datos personales de los individuos." />
            <Paragraph p="El responsable de tratamiento tiene la obligación legal de cumplir con las normativas de protección de datos, asegurando que se respeten los derechos de los titulares de datos y que se implementen medidas adecuadas de seguridad y confidencialidad. Este rol es crucial para garantizar la transparencia y la confianza en el manejo de la información personal en cualquier contexto organizacional." />
            <Image img="/rudp.svg" />
            <Title title="2.3 Delegado de protección de datos" />
            <Paragraph p="El delegado de protección de datos, también conocido como DPO por sus siglas en inglés (Data Protection Officer), es una figura designada dentro de una organización responsable del monitoreo de la conformidad con las leyes de protección de datos y la política interna de protección de datos personales. El DPD actúa de manera independiente y tiene la responsabilidad de informar y asesorar a la organización sobre sus obligaciones legales en relación con la protección de datos." />
            <Paragraph p="El DPD juega un papel crucial en la promoción de una cultura de protección de datos dentro de la organización, colaborando con equipos internos para implementar políticas y prácticas que salvaguarden la privacidad de los individuos y minimicen los riesgos asociados al tratamiento de datos personales." />
            <Image img="/dpo.webp" />
            <Title title="2.4 Encargado del tratamiento de datos personales" />
            <Paragraph p="El encargado del tratamiento de datos personales es una entidad externa o interna que procesa datos personales en nombre del responsable del tratamiento. Esta figura es designada por el responsable del tratamiento para realizar operaciones específicas con los datos personales, siguiendo las instrucciones del responsable y bajo un contrato formal que establece las responsabilidades y obligaciones del encargado." />
            <Image img="/etd.jpeg" />
            <Title title="2.5 Destinatario " />
            <Paragraph p="Un destinatario se refiere a la persona, entidad u organización que recibe los datos personales de parte del responsable del tratamiento o del encargado del tratamiento. Es importante destacar que el destinatario puede ser interno o externo a la organización que origina los datos, dependiendo del flujo de información y las necesidades específicas del tratamiento." />
            <Image img="/terceros.webp" />
            <Title title="2.6 Autoridad de Protección de Datos Personales" />
            <Paragraph p="La Autoridad de Protección de Datos Personales es una entidad gubernamental u organismo independiente encargado de supervisar y hacer cumplir las leyes de protección de datos dentro de un país o región específica. Su función principal es proteger los derechos de los individuos en relación con el tratamiento de sus datos personales y asegurar que las organizaciones cumplan con las normativas de privacidad establecidas." />
            <Image img="/super.jpeg" />
            <Title title="2.7 Consentimiento" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SKBLNlXGA28?si=xHNS2-xQJaXmsnZQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <Paragraph p="" />
            <Image img="/super.jpeg" />
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
