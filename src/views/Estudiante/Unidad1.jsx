import Cursos from "./Cursos.jsx";
import Banner from "../../components/Banner.jsx";

export default function Unidad1() {
  return (
    <>
      <Cursos
        curso={0}
        contenido={
          <div className="h-[33rem] overflow-auto">
            <Banner
              img="/banner1.jpg"
              title="Unidad 1: Definiciones Importantes"
            />
          </div>
        }
      />
    </>
  );
}
