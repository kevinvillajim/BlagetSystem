import {useState} from "react";
import ModalUser from "../components/ModalUser";
import user from "../components/user";

const Perfil = () => {
	const [showMenu, setShowMenu] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const handleMenuClick = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const handleModalClick = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};

	return (
		<div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-800 justify-center">
			<header
				className={`w-[100%] h-[5rem] flex justify-between items-center px-[2rem] shadow-sm`}
			>
				<a href="/estudiante/dashboard">
					<div
						id="menu-principal"
						className="flex cursor-pointer items-center"
						onClick={handleMenuClick}
					>
						<span className="material-symbols-outlined text-white">
							arrow_back_ios
						</span>
						<h2 className="ml-[1rem] text-white">Back</h2>
					</div>
				</a>
				<div
					className="flex cursor-pointer"
					id="show-modal"
					onClick={handleModalClick}
				>
					<img
						src={user.avatar}
						alt="avatar"
						className="w-[2.5rem] h-[2.5rem] rounded-full object-cover"
					/>
					<div className="flex items-center">
						<h2 className="ml-[1rem] text-white">
							{user.nombre + " " + user.apellido}
						</h2>
						<span id="more" className="material-symbols-outlined text-white">
							expand_more
						</span>
					</div>
					<div
						className={`${
							showModal
								? "opacity-100 scale-100 duration-300"
								: "opacity-0 scale-y-90 duration-200 invisible"
						} transition-all`}
					>
						<ModalUser isOpen={showMenu} />
					</div>
				</div>
			</header>
			<div className="w-[100%] flex justify-center">
				<div className="w-[35%] py-3">
					<div className="mb-8">
						<h1 className="font-bold text-3xl mb-2 text-center dark:text-gray-400">
							Información Personal
						</h1>
						<h3 className="text-center text-gray-600 dark:text-gray-400">
							Mantén tu información personal actualizada, esto garantizará que
							los certificados no tengan errores al ser generados o impresos.
						</h3>
					</div>

					<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8">
						<div className="flex justify-between items-center mb-4">
							<div>
								<h4 className="font-bold text-xl mb-1 dark:text-gray-400">
									Perfil
								</h4>
								<p className="text-sm text-gray-500">
									La información personal será visible solamente para ti, no se
									comparte con ningún tercero.
								</p>
							</div>
							<a
								href="/edit-profile"
								className="px-4 py-2 border rounded-md border-gray-300 dark:text-gray-400"
							>
								Edit
							</a>
						</div>

						{/* Photo */}
						<div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									FOTO
								</h6>
							</div>
							<div className="w-4/5 flex items-center">
								<img
									className="rounded-md w-12 h-12 object-cover"
									src={user.avatar ? `${user.avatar}` : "avatarDef.png"}
									alt="profile"
								/>
							</div>
						</div>

						{/* Name */}
						<div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									NOMBRE
								</h6>
							</div>
							<div className="w-4/5 dark:text-gray-400">
								{user.nombre + " " + user.apellido}
							</div>
						</div>

						{/* Bio */}
						<div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									BIO
								</h6>
							</div>
							<div className="w-4/5 dark:text-gray-400">{user.bio}</div>
						</div>

						{/* Phone */}
						<div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									TELÉFONO
								</h6>
							</div>
							<div className="w-4/5 dark:text-gray-400">{user.phone}</div>
						</div>

						{/* Email */}
						<div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									EMAIL
								</h6>
							</div>
							<div className="w-4/5 dark:text-gray-400">{user.email}</div>
						</div>

						{/* Password */}
						<div className="flex items-center">
							<div className="w-1/5">
								<h6 className="text-gray-500 text-xs font-medium dark:text-gray-400">
									PASSWORD
								</h6>
							</div>
							<div className="w-4/5 dark:text-gray-400">
								{Array(user.password.length).fill("•").join("")}
							</div>
						</div>
					</div>

					<div className="flex justify-between items-center mt-4">
						<div>
							<p className="text-gray-600 text-xs">created by</p>
							<a
								href="https://github.com/kevinvillajim"
								className="text-blue-500 text-xs font-medium"
								target="_blank"
								rel="noopener noreferrer"
							>
								kevinvillajim
							</a>
						</div>
						<div className="text-xs dark:text-gray-600">Sinergy Hard ©</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Perfil;
