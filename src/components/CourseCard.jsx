import ProgressBar from "./ProgressBar";
import Options from "./Options";
import IconButton from "@mui/material/IconButton";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

function CourseCard({ title, img, description, progress, link }) {
  return (
    <>
      <div className="flex flex-col border-b-2 border-[#22c55e] bg-[#eaeaea] rounded-md pb-[1rem]">
        <a href={link}>
          <div className="rounded-md w-full h-[10rem] overflow-hidden">
            <img
              src={img}
              className="object-cover"
            />
          </div>
        </a>
        <div className="px-[1rem]">
          <div className=" py-[0.8rem] flex flex-row justify-between items-center">
            <div className="flex gap-3 items-center">
              <span className="material-symbols-outlined font-extralight">
                menu_book
              </span>
              <span className="font-thin text-sm">Curso | Online</span>
            </div>
            <div>
              {/* <IconButton aria-label="delete">
                <MoreVertIcon color="success" />
              </IconButton> */}
              <Options />
            </div>
          </div>
          <a href={link}>
            <div>
              <h1 className="text-[20px] font-semibold">{title}</h1>
            </div>
          </a>
          <p className="w-[90%] text-[14px]">{description}</p>
          <div className="">
            <ProgressBar
              totalValue={progress}
              text="black"
            />
          </div>
          {progress === 100 ? (
            <>
              <a href={`${link}/certificado`}>
                <div className="flex items-center mt-[1rem] justify-center">
                  <IconButton aria-label="delete">
                    <WorkspacePremiumIcon color="success" />
                  </IconButton>
                </div>
              </a>
              {localStorage.setItem("isFinished", "true")}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default CourseCard;
