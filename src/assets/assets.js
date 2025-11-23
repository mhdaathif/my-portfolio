import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/Aathif.jpg';
import projectImg1 from '../assets/Importance-Of-Employee-Management-System.png';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/ecommerce.jpg';
import projectImg4 from '../assets/todo.png';
import projectImg5 from '../assets/Web-Portal.jpg';
import projectImg6 from '../assets/Finger-Tab.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Spring Boot', 'Java', 'PHP', 'Laravel', 'JavaScript', 'Restful Apis']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['Flutter', 'Android Studio']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Visual Studio Code', 'Figma', 'draw.io', 'Postman', 'Canva', 'Photoshop']
  }
];



export const projects = [
  {
    title: "Employee management system",
    description: "Developed a comprehensive platform for managing employee data, attendance, complaints, departments, and documents, ensuring efficient administrative processes.Implemented secure user authentication and authorization with spring security, featuring role-based access control. Designed and integrated restful apis for seamless interaction between frontend and backend services. Utilized PostgreSQL, jpa, and hibernate for robust and scalable database management. Conducted thorough testing and provided post-deployment support to maintain application stability and performance.",
    image: projectImg1,
    tech: ["java", "spring boot", "spring security", "jpa", "hibernate", "PostgreSQL", "maven", "restful web services"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management System",
    description: "Developed a comprehensive task management web application to streamline task assignment, tracking, and collaboration. Leveraged technologies like Java, Spring Boot, and MySQL for backend development, and integrated a responsive frontend using HTML, CSS, and JavaScript. The project demonstrates expertise in full-stack development, database management, and user-centric design principles.",
    image: projectImg2,
    tech: ["HTML", "CSS", "JavaScript",  "Java", "Spring Boot", "MySQL" ],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Digital Market Platform",
    description: "Designed and developed a responsive e-commerce platform using PHP, JavaScript, HTML, CSS, and Bootstrap. The system enables seamless product listing, customer registration, shopping cart management, and secure order processing. Focused on creating a user-friendly interface and enhancing the user experience with interactive features. Implemented responsive web design principles to ensure compatibility across devices. Conducted debugging and optimization to improve performance and maintain application stability.",
    image: projectImg3,
    tech: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "ToDo App",
    description: "Built a cross-platform task management application to help users create, view, edit, and delete “To-Do” items. It supports both mobile (iOS / Android) and web platforms, leveraging Flutter’s single codebase. Implemented a clean and simple UI for managing tasks, focusing on usability and responsiveness. Structured state management and data persistence (local storage / in-memory) to store task data.Organized project with modular Dart code (separating UI, business logic, and models) to improve maintainability and scalability.",
    image: projectImg4,
    tech: ["Flutter", "Dart"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Online Portal System",
    description: "Developed a web-based academic portal to manage students, teachers, academic officers, and assignments. Built authentication and authorization processes (login, registration, password reset) for different user roles: admin, students, teachers, and academic staff. Implemented assignment upload and mark-viewing functionality: teachers can upload assignments, students can submit them, and academic staff can review marks. Handled profile management, including user details update and blocking/unblocking of accounts. Ensured error handling and email notifications (through PHP’s mail or similar) for user workflows like password reset. Organized the codebase in a modular way, separating business logic (PHP backend) from presentation (frontend HTML/CSS/JS) for maintainability.",
    image: projectImg5,
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "Finger-Tab (Tap to Win) Game",
    description: "Developed a simple reflex-based mobile game where users must tap on-screen targets with precision and speed to score points. Built cross-platform support (Android, iOS, Windows) using Flutter’s UI framework. Implemented responsive UI and game loops to handle fast tap interactions and real-time feedback. Structured the codebase with separate layers for presentation, input handling, and game logic to ensure clean architecture and maintainability.",
    image: projectImg6,
    tech: ["Flutter", "Dart"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Software Engineer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Analyze and elicit customer requirements, and design the best software/web solutions to meet the same. Manage software/web development projects along the critical path while adhering to specifications, objectives, budgets, and timeframes. Manage technical, marketing, and business development tasks. Manage product development while integrating innovation and cutting-edge technology to build a sharp competitive advantage. Conduct market research, technological research, and data analysis. Deploy effective technological strategies in all projects. Perform vendor selection, liaison, and management. Liaise with customers while managing relationships, facilitating her digital transformation, and ensuring the highest customer satisfaction. Perform problem-solving, product testing and quality assurance, information security, risk management, and general administration. Optimize cost, resources, and processes to ensure the highest efficiency, productivity, and profitability.",
    color: "purple"
  },
  {
    role: "Intern Java Web Developer",
    company: "Nova Tech Zone (Pvt) Ltd, Sri Lanka ",
    duration: "2023 – 2024",
    description:
      "Assist in analysing and eliciting customer requirements and designing the best Java web solutions to meet the same. Manage Java web development projects along the critical path while adhering to specifications, objectives, budgets, and timeframes. Implement secure user authentication and authorization with spring security, featuring role-based access control. Designed and integrated restful apis for seamless interaction between frontend and backend services. Perform robust and scalable database management with postgresql, jpa, and hibernate. Conduct thorough testing and provided post-deployment support to maintain application stability, quality, and performance. Collaborate with technical, marketing, and business development teams to deliver the outlined targets. Contribute to product development while integrating innovation and cutting-edge technology to build a sharp competitive advantage. Assist with market research, technological research, and data analysis. Assist with effective technological strategies in all projects. Assist with vendor selection, liaison, and management. Liaise with customers while managing relationships, facilitating her digital transformation, and ensuring the highest customer satisfaction (Work experience continued.). Assist with problem-solving, product testing and quality assurance, information security, risk management, and general administration. Assist in optimizing cost, resources, and processes to ensure the highest efficiency, productivity, and profitability.",
    color: "blue"
  },
  {
    role: "Maths Teacher ",
    company: "Physical & Online Classes",
    duration: "2020 – 2022",
    description:
      "Conduct mathematics classes and exam-focused paper classes for Grade 10 and 11 students. Prepare and deliver lessons that simplify complex mathematical concepts, ensuring strong understanding and skill development. Provide personalized support, evaluate student performance, and guide them through past papers and model exams to improve their problem-solving ability. Help students build confidence, strengthen fundamentals, and achieve higher academic results.",
    color: "blue"
  },
  {
    role: "IT Executive",
    company: "FD Alchemy",
    duration: "2020 – 2022",
    description:
      "Contributed to the student management and class administration system for FD Alchemy. Responsibilities included registering students, handling payments, and managing class schedules. Uploaded class recordings to the website and maintained digital content for student access. Managed website registrations and coordinated the distribution of study materials by sending PDFs to students through WhatsApp. Ensured smooth communication, efficient operations, and timely updates across all academic and administrative activities.",
    color: "blue"
  }
];
