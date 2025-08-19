import {
  python,
  elecon,
  upskill,
  sap,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  travel,
  recipe,
  chatapp,
  todolist,
  portfolio,
  comingsoon,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Data Base Management",
    icon: backend,
  },
  {
    title: "Data Analytics  Power BI",
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Artificial Intelligence, Internet of Things (Internship)",
    company_name: "Edunet Foundation | SAP",
    icon: sap,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "AI involves developing systems that can learn and make decisions by processing large amounts of data using algorithms like machine learning and deep learning.",
      "Key skills include programming in Python, understanding AI models, and evaluating them using metrics such as accuracy, precision, and recall.",
      "IoT connects physical devices like sensors and microcontrollers to the internet, allowing them to collect and exchange data.",
    ],
  },
  {
    title: "React.js Developer (Internship)",
    company_name: "Tech Elecon Pvt Ltd",
    icon: elecon,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Learn the fundamentals of React, including creating components, managing state with useState, and using props to pass data between components.",
      "Understand how to use React Router for navigation between pages and integrate APIs to fetch and display dynamic data in your app using fetch or Axios.",
      "Explore styling React components with CSS, CSS-in-JS libraries like styled-components, and write unit tests using Jest and React Testing Library to ensure component functionality.",
    ],
  },
  {
    title: "Data Science & Machine Learning (Internship)",
    company_name: "Upskill Campus",
    icon: upskill,
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Learn how to clean and preprocess data using libraries like Pandas and NumPy, handle missing data, and perform exploratory data analysis (EDA) to identify trends and patterns.",
    ],
  },
  {
    title: "SAP Analytics Cloud (Internship)",
    company_name: "Edunet Foundation | SAP",
    icon: sap,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Learn how to connect SAP Analytics Cloud to various data sources, including SAP HANA, Excel, and cloud-based databases, to import and manipulate data for analysis.",
      "Understand how to create interactive dashboards and visualizations using SAC’s built-in charting tools, and learn how to design reports that present key insights to stakeholders.",
    ],
  },
  {
    title: "Full Stack Developer ( Internship)",
    company_name: "Tech Elecon Pvt Ltd",
    icon: elecon,
    iconBg: "#383E56",
    date: "Jan 2024 - April 2024",
    points: [
      "Learn how to build dynamic and responsive user interfaces using React.js, including handling state with hooks, managing component lifecycles, and routing with React Router.",
      "Understand server-side development using Node.js and Express.js to create RESTful APIs, manage requests, handle authentication, and interact with databases.",
      "Gain proficiency in using MongoDB for storing and managing data, and learn how to integrate MongoDB with Node.js using Mongoose for CRUD operations and data modeling.",
    ],
  },
  {
    title: "Web Application Developer (Engineer)",
    company_name: "Tech Elecon Pvt Ltd",
    icon: elecon,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Learn how to design and build user interfaces using HTML, CSS, and JavaScript, along with modern libraries/frameworks like React.js or Angular for dynamic, responsive web pages.",
      "Understand server-side programming using languages like Node.js, Python, or Java, and build APIs to manage data flow between the frontend and database.",
      "Gain experience in working with relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, and use Git for version control and collaboration on code with other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "Sr. Web Developer",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "Assistant Manager",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Exceutive Engineer",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel Here",
    description:
      "Built the Travel Here platform, enabling user exploration of landmarks and attractions with a seamless interface. Enhanced user engagement through smooth transitions and optimized performance.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://smiiit.github.io/travel-website/",
  },
  {
    name: "Recipe Finder",
    description:
      "Recipe Maker is a web application that allows users to search for recipes based on ingredients they have, generate a shopping list, and view step-by-step instructions for preparing the dish. .",
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
    image: recipe,
    source_code_link: "https://smiiit.github.io/recipe-finder/",
  },
  {
    name: "Chat App",
    description:
      "A real-time chat application built with React.js and Firebase, allowing users to log in and communicate with each other in real-time.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://smiiit.github.io/chat/",
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio website, showcasing my skills and experience as a software engineer. Features a responsive design, smooth animations, and a comprehensive overview of my projects and achievements.",
    tags: [
      {
        name: "canvas",
        color: "blue-text-gradient",
      },
      {
        name: "frammer motion",
        color: "green-text-gradient",
      },
      {
        name: "Three JS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://smitkp.vercel.app",
  },
  {
    name: "Todo List",
    description:
      "A simple yet powerful to-do list application that allows users to create, update, and delete tasks, and features a responsive design and smooth animations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sessionStorage",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://smiiit.github.io/todo-list/",
  },
  {
    name: "Data Visualizations",
    description:
      "An advanced data analytics platform that enables users to visualize, analyze, and derive insights from vast datasets, with customizable dashboards and real-time data processing capabilities.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "excel",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "/",
  },
];

export { services, technologies, experiences, testimonials, projects };
