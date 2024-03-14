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
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  python,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
