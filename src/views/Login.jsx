import fondoVideo2 from "/public/fondo2.webm";

export default function Login() {
  return (
    <div className="flex flex-row w-[100%] h-screen items-center">
      <div className="w-[65%] bg-gradient-to-r from-gray-500 to-gray-100/50 h-screen flex items-center">
        <video
          src={fondoVideo2}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
            opacity: 100,
            filter: "blur(2px)",
          }}
        ></video>
        <a href="/home">
          <div className="absolute top-0 left-0 w-[10rem] bg-white/70 p-[0.5rem] rounded-lg shadow-md shadow-black">
            <div>
              <img
                src="logo.png"
                className="w-full"
              />
            </div>
          </div>
        </a>
        <div className="flex items-center">
          <div className="flex justify-center">
            <span className="pl-[5rem] text-[25px] text-gray-900 w-[60%]">
              Una de las mejores inversiones es la Educación,{" "}
              <u>Cosecharás por años sus frutos!</u>
            </span>
          </div>
        </div>
      </div>
      <div className="w-[35%] flex items-center bg-gradient-to-t from-gray-200 to-white bg-opacity-90 h-screen border-l-2">
        <div className="login ">
          <div className="p-[2rem] m-[2rem] border border-gray-300 rounded-lg bg-white">
            <h1 className="mb-[1rem] text-[1.2rem]">Bienvenido</h1>
            {/* <form method="post"> */}
            <input
              type="text"
              name="u"
              placeholder="Correo"
              required="required"
            />
            <input
              type="password"
              name="p"
              placeholder="Contraseña"
              required="required"
            />
            <div className="flex justify-end">
              <a
                href="/home"
                className="text-[12px] pr-[5px] text-[#5C80DB]"
              >
                <u>Olvidaste tu contraseña?</u>
              </a>
            </div>
            <a
              className=""
              href="/estudiante/dashboard"
            >
              <button className="w-[100%] p-[0.5rem] px-[1.5rem] bg-[#006937] rounded-full text-[white] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim my-[1rem]">
                <span className="textButAnim">Iniciar Sesión</span>
              </button>
            </a>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
