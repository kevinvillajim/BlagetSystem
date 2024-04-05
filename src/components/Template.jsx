import {useState} from "react";
import SideBar from "./SideBar";
import "../App.css";
import ModalUser from "./ModalUser";
import HeaderIn from "./HeaderIn";
import PropTypes from "prop-types";
import {sideBarOptions} from "./sideBarOptions";

function Template({title, propButton, content}) {
	const [showMenu, setShowMenu] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const logo = "logo.png";
	const nombreCompleto = "Kevin Villacreses";
	const rol = "admin";
	const avatar = "avatar.jpeg";

	return (
		<>
			<div
				className={
					showMenu ? "grid grid-cols-1 md:grid-cols-8 relative" : "flex"
				}
			>
				<div
					className={
						showMenu
							? "col-span-1 md:col-span-1 h-screen sticky top-0"
							: "hidden"
					}
				>
					<SideBar
						logo={logo}
						avatar={avatar}
						options={sideBarOptions}
						name={nombreCompleto}
						rol={rol}
					/>
				</div>
				<div className={showMenu ? "col-span-1 md:col-span-7" : "w-screen"}>
					<div>
						<HeaderIn
							name={nombreCompleto}
							avatar={avatar}
							setShowMenu={setShowMenu}
							setShowModal={setShowModal}
						/>
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
					<div className="p-[2rem] bg-[#e3e3e3] min-h-[calc(100vh-4rem)]">
						<div className="h-[100%] w-[100%] bg-[#f8f8f8] rounded-lg p-[1rem]">
							{content}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Template.propTypes = {
	content: PropTypes.node.isRequired,
	title: PropTypes.string,
	propButton: PropTypes.string,
};

export default Template;
