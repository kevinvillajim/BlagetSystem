import {useState, useEffect} from "react";
import ModalUser from "../components/ModalUser";
import user from "../components/user";

const ProfileEdit = () => {
	const [userData, setUserData] = useState({
		name: "",
		bio: "",
		phone: "",
		email: "",
		password: "",
		photo: "",
	});

	useEffect(() => {
		// Fetch user data from the server or use the imported user data
		// Example: setUserData(user);

		// Simulating fetching user data
		setUserData({
			name: user.nombre,
			bio: user.bio,
			phone: user.phone,
			email: user.email,
			password: user.password,
			photo: user.avatar ? user.avatar : "avatarDef.png",
		});
	}, []);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUserData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission to update user data
	};

	const [showMenu, setShowMenu] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const handleMenuClick = () => {
		setShowMenu((prevShowMenu) => !prevShowMenu);
	};

	const handleModalClick = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};

	return (
		<div className="flex flex-col bg-gray-100 dark:bg-gray-800 justify-center">
			<header
				className={`w-[100%] h-[4rem] flex justify-between items-center px-[2rem] shadow-sm`}
			>
				<a href="profile">
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
					<div className="mb-8 text-center">
						<h1 className="font-bold text-3xl mb-2 text-gray-800 dark:text-gray-400">
							Cambiar Información
						</h1>
						<h3 className="text-gray-600 dark:text-gray-400">
							Los cambios se verán reflejados en toda la plataforma
						</h3>
					</div>
					<form
						className="border border-gray-200 dark:border-gray-700 rounded-xl p-6"
						onSubmit={handleSubmit}
					>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								FOTO
							</label>
							<div className="flex items-center">
								<img
									src={userData.photo}
									alt="profile"
									className="rounded-md w-12 h-12 object-cover"
								/>
								<label
									htmlFor="upload-photo"
									className="ml-4 cursor-pointer text-blue-500"
								>
									Cambiar
								</label>
								<input
									id="upload-photo"
									type="file"
									accept="image/*"
									name="photo"
									// onChange={handlePhotoChange}
									className="hidden"
								/>
							</div>
						</div>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								NOMBRE
							</label>
							<input
								type="text"
								name="name"
								value={userData.name}
								onChange={handleChange}
								placeholder="Enter your name..."
								className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-gray-400"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								BIO
							</label>
							<input
								type="text"
								name="bio"
								value={userData.bio}
								onChange={handleChange}
								placeholder="Enter your bio..."
								className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-gray-400"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								TELÉFONO
							</label>
							<input
								type="text"
								name="phone"
								value={userData.phone}
								onChange={handleChange}
								placeholder="Enter your phone..."
								className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-gray-400"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								EMAIL
							</label>
							<input
								type="email"
								name="email"
								value={userData.email}
								onChange={handleChange}
								placeholder="Enter your email..."
								className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-gray-400"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-gray-500 text-xs font-medium mb-1 dark:text-gray-400">
								PASSWORD
							</label>
							<input
								type="password"
								name="password"
								value={userData.password}
								onChange={handleChange}
								placeholder="Enter your password..."
								className="w-full border border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:text-gray-400"
							/>
						</div>
						<div className="flex justify-end">
							<button
								type="submit"
								className="bg-blue-500 text-white py-2 px-4 rounded-md"
							>
								Guardar
							</button>
						</div>
					</form>
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

export default ProfileEdit;
