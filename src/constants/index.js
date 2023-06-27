import { backend, web, javascript, typescript, html, css, reactjs, redux, nodejs, mongodb, git, docker, leap, hcmut, oracle, mysql, bootstrap, f1, survey, quality } from "../assets";

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
    title: "Backend Developer",
    icon: backend,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "mySQL",
    icon: mysql,
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

const experiences = [
  {
    title: "Intern Full-Stack Web Developer",
    company_name: "LEAP",
    icon: leap,
    iconBg: "#383E56",
    date: "August 2021 - December 2021",
    points: [
      "Learn about the Java programming language",
      "Learn about SpringBoot framework",
      "Developing simple web application has CRUD with Jhipster( React, SpringBoot).",
      "Developing and maintaining slack bot using SpringBoot and other related technologies.",
      "Participating in code reviews with leader and write reports on product features.",
    ],
  },
  {
    title: "Fresher Full-Stack Web Developer",
    company_name: "Data and Information Technology Center of Ho Chi Minh City University of Technology",
    icon: hcmut,
    iconBg: "#F8F6F4",
    date: "July 2022 - Present",
    points: [
      "Building a quality assurance system for Office for International Study Programs (OISP) in Ho Chi Minh City University of Technology.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participate in analysis, record and clarify user's business requirements, propose solutions to deploy the system.",
      "Check and handle arising errors as well as optimize the system during operation",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Survey of Quality Assurance System",
    description:
      'Web application that enables users to CRUD question of survey, Send an email to participate in the survey, Send automatic email reminders to take surveys, Dashboard to track results year by year, Statistics and extracting results into reports...',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "pink-text-gradient",
      },
    ],
    image: survey,
    source_code_link: "https://github.com/",
  },
  {
    name: "ISO Management of Quality Assurance System",
    description:
      "Web application that enables users to CRUD quality goals, Send email to office employees, Send automatic email reminders to input data of quality goals, Dashboard to track quality goal, Statistics and extracting data into reports...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "oracle",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "pink-text-gradient",
      },
    ],
    image: quality,
    source_code_link: "https://github.com/",
  },
  {
    name: "Formula1 Race REST API Result",
    description:
      "My persional project. It's a REST API that displays content crawled from the F1 racing results at RACE RESULTS that allows searching for contents by year, driver, team, race, etc., using the results of the crawling, allow searching using various conditions (like the yearly ranking of specific teams/drivers, etc.).",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "prismaORM",
        color: "green-text-gradient",
      },
      {
        name: "sqlLite",
        color: "pink-text-gradient",
      },
    ],
    image: f1,
    source_code_link: "https://github.com/duyhuynh99/Formular1API",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
