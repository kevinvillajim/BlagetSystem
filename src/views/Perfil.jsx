import {useState} from "react";
import Header from "../components/HeaderIn";
import user from "../components/user";

const Perfil = () => {
	const [showMenu, setShowMenu] = useState(true);
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 justify-center">
			<Header
				setShowMenu={setShowMenu}
				setShowModal={setShowModal}
				name={user.nombre + " " + user.apellido}
				avatar={user.avatar}
				colorBg="none"
				textColor="white"
			/>
			<div className="w-100% px-[10rem] py-6">
				<div className="mb-8">
					<h1 className="font-bold text-3xl mb-2 text-center dark:text-gray-400">
						Personal info
					</h1>
					<h3 className="text-center text-gray-600 dark:text-gray-400">
						Basic info, like your name and photo
					</h3>
				</div>

				<div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-8">
					<div className="flex justify-between items-center mb-4">
						<div>
							<h4 className="font-bold text-xl mb-1 dark:text-gray-400">
								Profile
							</h4>
							<p className="text-sm text-gray-500">
								Some info may be visible to other people
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
								PHOTO
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
								NAME
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
							<h6 className="text-gray-400 text-xs font-medium dark:text-gray-400">
								PHONE
							</h6>
						</div>
						<div className="w-4/5 text-gray-400 dark:text-gray-400">
							{user.phone}
						</div>
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
	);
};

export default Perfil;
