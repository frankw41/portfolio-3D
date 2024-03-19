import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { istj } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&#39;m <span className="text-[#915eff]">Frank</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 w-4/5`}>
            I am enthusiastic about programming, especially web application
            development. I am excited and eager to dive into industry!
            <br />
            <br />
            <span className="font-bold flex gap-2">
              MBTI:
              <span
                className="flex cursor-pointer z-10 text-[#915eff] gap-2"
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
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />

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
