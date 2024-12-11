import project1 from "../projects/project-1.png";
import project2 from "../projects/project-2.jpg";
import project3 from "../projects/project-3.jpg";
import project4 from "../projects/project-4.jpg";

export const HERO_CONTENT = `I am a highly motivated 5th-semester Computer Science student at Binus University with a strong foundation in software engineering principles. I have hands-on experience in both front-end and back-end development using technologies like React.js, Node.js, Laravel, and MySQL. Additionally, I am proficient in languages such as C, C++, Java, HTML, CSS, and JavaScript. My goal is to apply my skills to build scalable and efficient web applications that provide innovative solutions and exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: { 
      text: "MulaiDulu", 
      link: "https://mulaidulu.site" 
    },
    image: project1,
    description:
      "Led the development of MulaiDulu, a coaching platform aimed at empowering MSMEs and individuals to grow their businesses.",
    technologies: ["HTML", "Bootstrap", "Laravel", "MySQL"],
  },
  {
    title: { 
      text: "MakanGak",
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
    description:
      "Frontend of a interactive and responsive gaming website.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  domicile: "West Jakarta",
  phoneNo: "+6281265571198",
  email: "calvinhendra330@gmail.com",
};
