import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/PeerLink.png";
import project3 from "../assets/projects/Project3.png";

export const HERO_CONTENT = `I am a passionate Full Stack and ML Developer with a knack for crafting robust and scalable web,ml applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB apart from this i also have hands on experience in Machine Learning ,Deep Learning and Computer Vision.My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a versatile developer with expertise in MERN stack web development, including React.js for dynamic user interfaces, Node.js and Express.js for server-side logic, and MongoDB for database management. Additionally, I have hands-on experience with Next.js for server-side rendering and optimizing web performance. My passion extends to machine learning and deep learning, specializing in computer vision applications that leverage AI to solve complex problems.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "BICEP Innovation Centre",
    description: `Worked in a team for developing and maintaining BICEP website using Nextjs. Implemented  Server actions and integrated with PostgreSQL database. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Next.js", "PostgreSQL","Prisma","TypeScript"],
  },
];

export const PROJECTS = [
  {
    title: "Imaginify",
    image: project1,
    description:
      " Developed an AI-driven SaaS application featuring image transformation tools.Integrated image content search functionality, Authentication using Clerk, payment system with Stripe, and a profile page for managing saved transformations.",
    technologies: ["Next.js", "TailwindCSS","TypeScript", "MongoDB"],
  },
  {
    title: "PeerLink",
    image: project2,
    description:
      " Developed a Social Media application, with complete authentication using Clerk, user onboarding, a visually appealing homepage, and a multi-level comment system.Implemented user search, profile management,creating and managing communities,and community search feature.",
    technologies: ["Next.js", "TailWindCSS", "MongoDB","TypeScript"],
  },
  {
    title: "Gesture Learn",
    image: project3,
    description:
      "Developed AI-based Lip Reading System: Utilized deep learning to translate lip movements into text,supporting individuals with hearing impairments.Built Sign Language Detection Model: Leveraged MediaPipe for hand tracking, OpenCV for image processing, and LSTM deep learning to convert sign language gestures into text,for the deaf community.Created AI-driven Math Solver: Utilized OpenCV and Gemini to recognize and solve mathematical problems drawn by users, providing instant solutions for educational purposes.",
    technologies: ["Deep Learning", "Computer Vision", "OpenCV", "MediaPipe", "LSTM"],
  },
];

export const CONTACT = {
  address: "BMSIT BOYS HOSTEL,Bengaluru ",
  phoneNo: "+919548000847 ",
  email: "tyagipranjal16@gmail.com",
};
