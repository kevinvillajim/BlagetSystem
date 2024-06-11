import PropTypes from "prop-types";

function Header({setShowMenu, setShowModal, course}) {
	const handleMenuClick = () => {
		setShowMenu && setShowMenu((prevShowMenu) => !prevShowMenu);
	};
	const handleModalClick = () => {
		setShowModal && setShowModal((prevShowModal) => !prevShowModal);
	};

	let colorBg = "#000";
	let textColor = "[#fff]";

	return (
		<>
			<header
				className={`w-[100%] h-[5rem] bg-[${colorBg}] flex justify-between items-center px-[2rem] shadow-sm`}
			>
				<div id="menu-principal" className="flex items-center">
					<div className="w-[40px] h-[40px]">
						<img
							src="/logo.png"
							alt="logo"
							className="w-full h-full object-cover"
						/>
					</div>
					<h2 className={`ml-[1rem] text-${textColor} text-2xl`}>{course}</h2>
				</div>
				<a href="/admin/dashboard">
					<div className="flex cursor-pointer">
						<span className="material-symbols-outlined text-white text-4xl">
							close
						</span>
					</div>
				</a>
			</header>
		</>
	);
}

Header.propTypes = {
	setShowMenu: PropTypes.func,
	setShowModal: PropTypes.func,
	name: PropTypes.string,
	avatar: PropTypes.string,
};

export default Header;
