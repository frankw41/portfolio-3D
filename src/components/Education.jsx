import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles";
import { educations } from "../constants/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import TimelineCard from "./TimelineCard.jsx";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2 className={styles.sectionHeadText}>Education Background</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((experience, index) => (
            <TimelineCard key={index} object={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

const EducationPage = SectionWrapper(Education, "education");

export default EducationPage;
