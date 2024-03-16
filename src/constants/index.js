import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  python,
  docker,
  whiteboard,
  w2e_welcome,
  w2e_chat,
  w2e_detail,
  w2e_list,
  w2e_login,
  w2e_map,
  w2e_message,
  mm_main,
  qua_add,
  qua_dashboard,
  qua_detail,
  qua_login,
  threejs,
  unimelb,
  queuesolutions,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "Master of Information Technology",
    company_name: "University of Melbourne",
    icon: unimelb,
    iconBg: "#383E56",
    date: "July 2022 - November 2023",
    points: [
      "iOS Development - Mobile Computing SystemS Programming",
      "Agile Workflow, Teamwork - Software Project",
      "Architecture Design - Distributed Systems",
      "Machine Learning - Natural Language Processing, Computer Vision, Statistical Machine Learning",
      "Cyber Security - Web Security",
    ],
  },
  {
    title: "Bachelor of Computer Science",
    company_name: "University of Melbourne",
    icon: unimelb,
    iconBg: "#383E56",
    date: "July 2018 - July 2022",
    points: [
      "Responsive Web Design - Web Information Technology",
      "Agile Methodologies, Web Development - IT Project",
      "Teamwork - Software Modelling and Design",
      "Programming, Data Structures - Algorithms and Data Structures, Models of Computation",
      "AI- Machine Learning, Artificial Intelligence",
      "Database - Database Systems, Computer Systems",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer Trainee",
    company_name: "Queuesolutions",
    icon: queuesolutions,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Assisted a senior engineer in refactoring Motivational Modeling from JavaScript to TypeScript.",
      "Contributed to the transition of MxGraph (JGraph) to maxGraph/core for graphing functions.",
      "Independently addressed Github issues.",
      "Proficiently utilized basic Unix commands to establish local development environment.",
      "Implemented solutions for organizing the maxGraph source code and imported into the codebase.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Queuesolutions",
    icon: queuesolutions,
    iconBg: "#383E56",
    date: "Match 2023 - July 2023",
    points: [
      "Played a key role in refactoring code, implementing new functionalities including multi-image uploads and handling HEIF image formats.",
      "Documented APIs and all code modifications, ensuring clear and maintainable documentation.",
      "Collaborated in deploying the application to a Digital Ocean droplet, including setting up a CI/CD pipeline template.",
      "Worked closely with a senior engineer, gaining valuable insights and guidance in application development and deployment.",
      "Actively participated in weekly team meetings, consistently meeting project deadlines and contributing to discussions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "What2Eat",
    description:
      "An iOS application for sharing food posts with social app \
      features, implemented main page functionalities, allowing \
      users to switch between list view and map view for \
      location tracking.",
    tags: [
      {
        name: "SwiftUI",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    images: [
      w2e_welcome,
      w2e_login,
      w2e_list,
      w2e_map,
      w2e_detail,
      w2e_chat,
      w2e_message,
    ],
    source_code_link: "https://github.com/frankwan41/COMP90018_Assignment2",
  },
  {
    name: "Motivational Modelling",
    description:
      "Motivational Model Editor is used to help user create emotional goal models, through writing different type \
      of goals and rendering through it's own graphing function.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    images: [mm_main],
    source_code_link: "https://momo-swen90009.eresearch.unimelb.edu.au/",
  },
  {
    name: "Quartefacts",
    description:
      "The application focuses on storing family artifacts with \
      various types of images, including automatic conversion of \
      HEIC to PNG.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    images: [qua_login, qua_dashboard, qua_add, qua_detail],
    source_code_link: "",
  },
  {
    name: "White Board",
    description:
      "A collaborative drawing tool enabling multiple users to draw simultaneously, including real-time chat.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Concurrency",
        color: "green-text-gradient",
      },
      {
        name: "Java Swing",
        color: "pink-text-gradient",
      },
    ],
    images: [whiteboard],
    source_code_link: "",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
