import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useDarkMode } from "../hoc/DarkModeContext";

const TimelineCard = ({ object }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#1d1836" : "#ffffff",
        colors: isDarkMode ? "#fff" : "#000",
      }}
      contentArrowStyle={{
        borderRight: isDarkMode ? "7px solid #232631" : "7px solid #fff",
      }}
      date={object.date}
      dateClassName={isDarkMode ? "text-white" : "text-black"}
      iconStyle={{ background: object.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={object.icon}
            alt={object.company_name}
            className="w=[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="dark:text-white text-black text-[24px] font-bold">
          {object.title}
        </h3>
        <p
          className="dark:text-secondary text-light_secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {object.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {object.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-white-100 text-black-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
