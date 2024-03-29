import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { istj } from "../assets";
import { Tooltip } from "react-tooltip";

const Hero = ({ isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  return (
    <section className="relative w-full h-screen mx-auto">
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
            <span
              className="text-[#915eff] cursor-pointer "
              data-tooltip-id="linkedin"
              data-tooltip-content={"Check out my Linkedin!"}
              data-tooltip-place={isTablet || isMobile ? "bottom" : "right"}
              data-tooltip-offset={isTablet || isMobile ? -5 : 20}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/frank-yicong-wan-89a132268/",
                  "_blank"
                )
              }
            >
              Frank
            </span>
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
              <span
                data-tooltip-id="mbti"
                data-tooltip-content={"Check out what is my personality?"}
                data-tooltip-place="bottom-start"
                className="flex cursor-pointer text-[#915eff] gap-2"
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
              <Tooltip
                id="linkedin"
                defaultIsOpen={true}
                style={{ fontSize: isTablet || isMobile ? "15px" : "20px" }}
                closeEvents={["click"]}
              />
              <Tooltip id="mbti" style={{ fontSize: "20px" }} />
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas
        isDarkMode={isDarkMode}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Scroll Down hint */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
