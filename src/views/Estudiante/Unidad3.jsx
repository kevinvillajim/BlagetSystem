import Banner from "../../components/Banner.jsx";
import Title from "../../components/Title.jsx";
import Paragraph from "../../components/Paragraph.jsx";
import Image from "../../components/Image.jsx";
import List from "../../components/List.jsx";
import SubTitle from "../../components/SubTitle.jsx";
import Cursos from "./Cursos.jsx";

export default function Unidad1() {
  return (
    <>
      <Cursos
        curso={0}
        contenido={
          <div className="h-[38rem] overflow-auto">
            <Banner
              img="/banner3.jpg"
              title="Unidad 3: Derechos del interesado"
            />
            <Title title="3.1 Derechos" />
            <Paragraph p="Los datos personales y el control sobre ellos le pertenecen a cada Interesado. Por lo cual el interesado, podrá ejercer los derechos, que se indican a continuación:" />
            <List
              li={[
                "El Interesado puede conocer qué datos personales son tratados por NUESTRA ORGANIZACIÓN.",
                " El Interesado puede actualizar sus datos personales en caso de alguna modificación o actualización.",
                "El Interesado puede solicitar la eliminación de sus datos personales cuando no sea necesario con la finalidad con la que se recolectó inicialmente, o a su vez si el Interesado no tiene ningún producto, servicio activo u obligaciones con NUESTRA ORGANIZACIÓN.",
                "El Interesado puede oponerse al uso de sus datos personales para finalidades distintas a las que se recabó, si no son necesarias para mantener la relación contractual.",
              ]}
            />
            <Paragraph p="El Interesado puede solicitar el cese temporal del tratamiento de sus datos cuando:" />
            <List
              li={[
                "Impugna la exactitud de sus datos personales",
                "Si NUESTRA ORGANIZACIÓN no requiere tratar sus datos personales pero el Interesado los llega a necesitar para la formulación, el ejercicio o la defensa de reclamaciones.",
                "Si se opone al tratamiento de sus datos para el cumplimiento de una misión en interés público o para la satisfacción de un interés legítimo, mientras NUESTRA ORGANIZACIÓN corrobora si los motivos legítimos para el tratamiento prevalecen sobre los del Interesado.",
                "El Interesado puede solicitar a NUESTRA ORGANIZACIÓN la entrega de sus datos personales en un formato digital.",
                "El Interesado puede solicitar que un operador de NUESTRA ORGANIZACIÓN intervenga para explicarle al Interesado la decisión del tratamiento automatizado, recoger sus comentarios sobre ello impugnar la decisión de NUESTRA ORGANIZACIÓN en caso de requerirlo.",
              ]}
            />
            <Paragraph p="NUESTRA ORGANIZACIÓN en función de su interés legítimo analiza las preferencias de los Interesados para ofrecer productos y servicios que se consideran de su interés. Adicionalmente, el Interesado podría autorizar a NUESTRA ORGANIZACIÓN a:" />
            <List
              li={[
                "Consultar y tratar los datos personales y preferencias de forma detallada para que NUESTRA ORGANIZACIÓN ofrezca las soluciones productos y/o servicios.",
                "Contactar con el Interesado para ofrecer propuestas de valor de productos y servicios.",
                "El Interesado al declarar que conoce estos puntos, autoriza a NUESTRA ORGANIZACIÓN de manera expresa a tratar sus datos personales. Dicho consentimiento será recabado al aceptar la declaración de privacidad mediante los canales digitales, de manera verbal u otros medios utilizados por NUESTRA ORGANIZACIÓN",
              ]}
            />
            <Image img="/lopdp.jpg" />
            <Title title="3.2 Amenazas Actuales" />
            <SubTitle subtitle="Ahora, aprendamos a proteger nuestros datos identificando amenazas actuales." />
            <Image img="/advertencia.webp" />
            <SubTitle subtitle="ALERTA!" />
            <Paragraph p="" />
            <Title title="3.3 ¿Que hacer para no ser víctimas?" />
            <Paragraph p="El titular de datos personales es la persona física a quien pertenecen los datos que están siendo procesados o utilizados por una entidad u organización. Es decir, es la persona a la que se refieren los datos y cuya identidad puede ser determinada o está determinada. Por ejemplo en 'Usuarios de servicios en línea:' Cuando una persona crea una cuenta en una plataforma digital (como redes sociales, servicios de correo electrónico, etc.), se convierte en titular de los datos que proporciona durante el registro." />
            <Image img="/usuario.jpg" />
          </div>
        }
      />
    </>
  );
}
