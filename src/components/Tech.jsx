import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useDarkMode } from "../hoc/DarkModeContext";

const Tech = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} isDarkMode={isDarkMode} />
        </div>
      ))}
    </div>
  );
};

const TechPage = SectionWrapper(Tech, "");

export default TechPage;
