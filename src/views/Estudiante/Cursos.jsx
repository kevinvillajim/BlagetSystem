import SideBarCourse from "../../components/SideBarCourse";
import HeaderCourse from "../../components/HeaderCourse";
import ContentCourse from "../../components/ContentCourse";
import cursos from "../../components/cursos";

const Cursos = ({ curso, contenido }) => {
  return (
    <>
      <div>
        <HeaderCourse title={cursos[curso].title} />
        <div className="flex">
          <div className="w-[30%]">
            <SideBarCourse cursos={cursos[curso]} />
          </div>
          <div className="w-[100%] bg-[#191b20]">
            <ContentCourse
              subtitle={cursos[curso].title}
              content={<>{contenido}</>}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
