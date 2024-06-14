import CourseProgress from "./CourseProgress";
import ProgressBar from "./ProgressBar";

function Card({ title, img, description, progress, link }) {
  return (
    <>
      <a href={link}>
        <div className="flex flex-col border-b-2 border-[#22c55e] bg-[#eaeaea] rounded-md">
          <div className="rounded-md w-full h-[10rem] overflow-hidden">
            <img
              src={img}
              className="object-cover"
            />
          </div>
          <div className="px-[1rem]">
            <div className=" py-[0.8rem] flex flex-row justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined font-extralight">
                  menu_book
                </span>
                <span className="font-thin text-sm">Curso | Online</span>
              </div>
              <div>
                <span className="material-symbols-outlined text-[#22c55e]">
                  more_vert
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-[20px] font-semibold">{title}</h1>
            </div>
            <p className="">{description}</p>
            <div className="pb-[2rem]">
              <ProgressBar
                totalValue={progress}
                text="black"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
