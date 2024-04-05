import MenuIcon from "@mui/icons-material/Menu";

function Header() {
	return (
		<>
			<div className="py-[1rem] px-[2rem] bg-[white]">
				<div className="w-[screen] flex justify-between items-center">
					<div className="w-[60px] h-[auto] header-logo">
						<img src="logo.png" className="w-[100%] h-[100%]" />
					</div>
					<div className="flex items-center lista-header">
						<ul className="flex gap-10 cursor-pointer text-[black] text-[20px]">
							<li className="flex items-center">Inicio</li>
							<li className="flex items-center">Cursos</li>
							<li className="flex items-center">Contacto</li>
							<li className="flex items-center">Sobre Nosotros</li>
							<li className="py-[0.5rem] px-[1.5rem] bg-[#2866ff] rounded-full text-[white] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnimB">
								<span className="textButAnim">Inscríbete</span>
							</li>
							<a href="/login">
								<li
									className="p-[0.5rem] px-[1.5rem] bg-[black] rounded-full text-[white] cursor-pointer transition duration-300 ease-in-out relative overflow-hidden botonAnim"
									href="/login"
								>
									<span className="textButAnim">Iniciar Sesión</span>
								</li>
							</a>
						</ul>
					</div>
					<div className="border border-2 border-black p-[0.3rem] h-[100%] rounded-md menu-header">
						<MenuIcon />
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
