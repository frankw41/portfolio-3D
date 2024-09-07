import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { istj } from "../assets";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useDarkMode } from "../hoc/DarkModeContext";

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [screenHeight, setScreenHeight] = useState(window.innerHeight);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const { isDarkMode } = useDarkMode();

	useEffect(() => {
		// Add a listener for changes to the screen size for mobile
		const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mobileMediaQuery.matches);

		const handleMobileMediaQueryChange = (evt) => {
			setIsMobile(evt.matches);
		};
		mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);

		// Add a listener for changes to the screen size for tablet (iPad)
		const tabletMediaQuery = window.matchMedia(
			"(min-width: 501px) and (max-width: 1024px)"
		);
		setIsTablet(tabletMediaQuery.matches);

		const handleTabletMediaQueryChange = (evt) => {
			setIsTablet(evt.matches);
		};
		tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

		// Cleanup for mobile media query
		return () => {
			mobileMediaQuery.removeEventListener(
				"change",
				handleMobileMediaQueryChange
			);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Track screen resize
	useEffect(() => {
		const handleResize = () => {
			setScreenHeight(window.innerHeight);
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const CustomWidthTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ maxWidth }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			maxWidth: maxWidth,
		},
	}));

	return (
		<section className="relative w-full h-screen mx-auto flex flex-col">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915eff]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div className="z-[1]">
					<h1 className={`${styles.heroHeadText} dark:text-white text-black`}>
						Hi, I&#39;m{" "}
						<Tooltip
							title={
								<p style={{ fontSize: isTablet || isMobile ? "15px" : "20px" }}>
									Check out my Linkedin!
								</p>
							}
							arrow
							open
							placement={isTablet || isMobile ? "bottom" : "right"}
							slotProps={{
								popper: {
									modifiers: [
										{
											name: "offset",
											options: {
												offset: isTablet || isMobile ? [0, -10] : [0, 10],
											},
										},
									],
								},
							}}
							// Issue(Partial Solve): ToolTip render in front of navbar when scroll down
							// https://stackoverflow.com/questions/64220054/material-ui-tooltip-is-not-shown-correctly-inside-a-container-with-overflow-scro
							// PopperProps={{
							//   disablePortal: true,
							// }}
							componentsProps={{
								tooltip: {
									sx: {
										display: scrollY > 40 ? "none" : "block",
										height: isTablet || isMobile ? "30px" : "45px",
										alignContent: "center",
									},
								},
							}}
						>
							<span
								className="text-[#0094e3] cursor-pointer "
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/frank-yicong-wan-89a132268/",
										"_blank"
									)
								}
							>
								Frank
							</span>
						</Tooltip>
					</h1>
					<p
						className={`${styles.heroSubText} lg:mt-2 mt-8 dark:text-white-100 text-black w-4/5`}
					>
						I am enthusiastic about programming, especially web application
						development. I am excited and eager to dive into industry!
						<br />
						<br />
						<span className="font-bold flex gap-2">
							MBTI:
							<CustomWidthTooltip
								maxWidth={500}
								title={
									<p
										style={{
											fontSize: isTablet || isMobile ? "15px" : "20px",
										}}
									>
										Check out what is my personality?
									</p>
								}
								arrow
								placement="right-start"
							>
								<span
									className="flex cursor-pointer text-[#0094e3] gap-2"
									onClick={() =>
										window.open(
											"https://www.16personalities.com/istj-personality",
											"_blank"
										)
									}
								>
									ISTJ
									<img
										src={istj}
										alt="istj_icon"
										className="w-10 h-10 object-contain"
									/>
								</span>
							</CustomWidthTooltip>
						</span>
					</p>
				</div>
			</div>
			<div className={`h-full  ${screenHeight < 700 && "mt-28"}`}>
				{console.log(screenHeight)}
				<ComputersCanvas
					isDarkMode={isDarkMode}
					isMobile={isMobile}
					isTablet={isTablet}
				/>
			</div>

			{/* Scroll Down hint */}
			<div
				className={`absolute bottom-1/2 right-[10%] flex justify-center items-center ease-in-out duration-300 ${
					window.innerHeight / 10 > scrollY ? "opacity-100" : "opacity-0"
				}`}
			>
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 dark:border-secondary border-light_secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full dark:bg-secondary bg-light_secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
