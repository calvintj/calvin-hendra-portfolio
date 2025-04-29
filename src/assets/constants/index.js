import project1 from "../projects/project-1.png";
import project2 from "../projects/project-2.jpg";
import project3 from "../projects/project-3.jpg";
import project4 from "../projects/project-4.jpg";
import projectBati from "../projects/project-bati.png"

export const HERO_CONTENT = `I am a highly motivated computer science student at Binus University with a strong foundation in software engineering principles. I have hands-on experience in both front-end and back-end development, using modern technologies such as Next.js, TypeScript, React, Node.js, Express.js, and PostgreSQL. Additionally, I have completed projects using languages and frameworks like C, C++, Java, HTML, CSS, JavaScript, MySQL, and Laravel. My goal is to leverage my skills to build scalable and efficient web applications that deliver innovative solutions and exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient, user-friendly web applications. Currently, I specialize in Next.js, TypeScript, React, Node.js, Express.js, and PostgreSQL to develop modern web solutions. I have also gained proficiency in other technologies including C, C++, Java, HTML, CSS, JavaScript, MySQL, and Laravel from past projects. My journey in web development started with a deep curiosity about how things work, and it has evolved into a career where I continuously learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;


export const EXPERIENCES = [
  {
    year: "February 2024 - Present",
    role: "Full-Stack Developer Intern",
    company: "PT Bati Investasi Teknologi",
    description: `Responsible for developing a full-stack web-based solution for Bati AI Wealth Management while collaborating with the trading team to build robust data pipelines for trading analysis and modeling.`,
    technologies: ["TypeScript", "React.js", "Next.js", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL"],
  },  
  {
    year: "May 2024",
    role: "Certified Backend Developer with Node.js",
    company: "BINUS Center",
    description: `Earned certification in backend development by completing an intensive program focused on Mastering Backend Development with Node.js. Demonstrated expertise in server-side development, RESTful API design, database integration using Sequelize ORM, and middleware implementation through a rigorous assessment process.`,
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL", "REST API"],
  },
  {
    year: "Nov 2023 – July 2024",
    role: "Member",
    company: "Google Developer Student Club ",
    description: `Participated in training sessions organised by the club, gaining valuable skills in both technical and non-technical areas`,
    technologies: ["Coding"],
  },
  {
    year: "Mar 2023 — Jan 2024",
    role: "Creative Design Activist",
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    description: `Designed posters for social media platforms using design tools to enhance promotional materials' visual appeal and Collaborated with the marketing team to ensure designs aligned with organisational branding and messaging.`,
    technologies: ["Design", "Canva", "Photoshop", "Collaboration", "Teamwork"],
  },
  {
    year: "Nov 2022 – Sept 2023",
    role: "Activist",
    company: "Bina Nusantara Computer Club",
    description: `Coordinated with team members to develop and execute impactful work programs, ensuring successful implementation and participated in training sessions organised by the club, enhancing hard skills and soft skills`,
    technologies: [
      "Public Speaking",
      "Coding",
      "Design",
      "Teamwork",
      "Collaboration",
    ],
  },
];

export const PROJECTS = [
  {
    title: {
      text: "Bati WealthAI",
      link: "https://wealthplatform.batiinvestasi.ai",
    },
    image: projectBati,
    description:
      "Responsible for the development of Bati WealthAI, an intelligent web based CRM for relationship manager to grow their portfolio with Bati AI integration.",
      technologies: ["TypeScript", "React.js", "Next.js", "TailwindCSS", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: {
      text: "MulaiDulu",
      link: "https://mulaidulu.site",
    },
    image: project1,
    description:
      "Led the development of MulaiDulu, a coaching platform aimed at empowering MSMEs and individuals to grow their businesses.",
    technologies: ["HTML", "Bootstrap", "Laravel", "MySQL"],
  },
  {
    title: {
      text: "MakanGak",
      link: "https://makan-gak-app-fullstack.vercel.app"
    },
    image: project2,
    description:
      "Led the development of MakanGak, a website on food options around Binus University, to assist new students in finding meals.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs", "NodeJs", "MySQL"],
  },
  {
    title: {
      text: "GymMe",
    },
    image: project3,
    description:
      "A dynamic e-commerce website specialising in supplement sales.",
    technologies: ["HTML", "CSS", "C#", "ASP.NET"],
  },
  {
    title: {
      text: "Sea of FTars",
    },
    image: project4,
    description: "Frontend of a interactive and responsive gaming website.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  domicile: "West Jakarta",
  phoneNo: "+6281265571198",
  email: "calvinhendra330@gmail.com",
};
