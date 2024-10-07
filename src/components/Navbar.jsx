import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo_bg, logo_light_bg, cv } from "../assets";
import DarkModeToggle from "react-dark-mode-toggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDarkMode } from "../hoc/DarkModeContext";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [menuAnchorEl, setMenuAnchorEl] = useState(null);
	const [resumeAnchorEl, setResumeAnchorEl] = useState(null);
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	const handleMenuClick = (event) => {
		setMenuAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};

	const handleResumeClick = (event) => {
		setResumeAnchorEl(event.currentTarget);
	};

	const handleResumeClose = () => {
		setResumeAnchorEl(null);
	};

	// Function to check which section is in view
	const handleScroll = () => {
		const sections = navLinks.map((link) => document.getElementById(link.id));

		sections.forEach((section, index) => {
			const rect = section.getBoundingClientRect();
			if (rect.top <= window.innerHeight / 2) {
				setActive(navLinks[index].title);
			}

			if (index === 0 && rect.top >= window.innerHeight / 2) {
				setActive("");
			}
		});
	};

	// Add scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const customMenuProps = {
		paper: {
			sx: {
				background: "linear-gradient(to right, #434343, #000000)",
				color: "#aaa6c3",
			},
		},
	};

	return (
		<nav
			className={`${styles.paddingX} w-full py-5 fixed top-0 z-20 dark:bg-primary bg-light_primary`}
		>
			<div className="mx-auto grid grid-cols-[2fr,auto,auto] items-center">
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<Link
						to="/"
						className="flex items-center gap-2"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<img
							src={isDarkMode ? logo_bg : logo_light_bg}
							alt="logo"
							className="dark:w-16 dark:h-16 w-12 h-12 object-contain"
						/>
						<p className="dark:text-white text-[#4d4d4d] text-[18px] font-bold cursor-pointer flex flex-shrink-0">
							Frank Wan
						</p>
					</Link>
					<ul className="list-none hidden navMid:flex flex-row gap-10">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title
										? "dark:text-white text-[#d1cdcd]"
										: "dark:text-secondary text-[#4d4d4d]"
								} hover:dark:text-white hover:text-[#4d4d4d] text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.title)}
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>
					<div className="navMid:hidden flex flex-1 justify-end items-center">
						<div
							className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-white text-black"
							onClick={handleMenuClick}
						>
							{menuAnchorEl ? <FaTimes size={25} /> : <FaBars size={25} />}
						</div>
						<Menu
							disableScrollLock
							anchorEl={menuAnchorEl}
							keepMounted
							open={Boolean(menuAnchorEl)}
							onClose={handleMenuClose}
							slotProps={customMenuProps}
						>
							{navLinks.map((link) => (
								<MenuItem
									key={link.id}
									onClick={() => {
										setActive(link.title), handleMenuClose();
									}}
									sx={{
										color: active === link.title && "white",
										fontWeight: "500",
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</MenuItem>
							))}
						</Menu>
					</div>
				</div>
				<div className="dark:text-secondary text-[#4d4d4d] text-base mx-5 flex flex-row items-center gap-3 font-bold">
					<button
						onClick={handleResumeClick}
						className={`hidden navMid:flex ${
							resumeAnchorEl && "text-secondary"
						}`}
					>
						Resume
					</button>
					<img
						src={cv}
						onClick={handleResumeClick}
						className="cursor-pointer navMid:hidden w-6 h-6 bg-white rounded-sm"
					/>
					<Menu
						disableScrollLock
						anchorEl={resumeAnchorEl}
						keepMounted
						open={Boolean(resumeAnchorEl)}
						onClose={handleResumeClose}
						slotProps={customMenuProps}
					>
						<a href="/portfolio-3D/Frank Wan Resume.pdf" target="_blank">
							<MenuItem onClick={handleResumeClose} className="gap-1">
								View <GrFormView size={25} />
							</MenuItem>
						</a>
						<a
							href="/portfolio-3D/Frank Wan Resume.pdf"
							download={"Frank Wan Resume.pdf"}
						>
							<MenuItem onClick={handleResumeClose} className="gap-1">
								Download <IoMdDownload size={15} />
							</MenuItem>
						</a>
					</Menu>
				</div>
				<div className="mx-6">
					<DarkModeToggle
						onChange={toggleDarkMode}
						checked={isDarkMode}
						size={55}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
