import { Assets } from "@/constants/assets";

export type ExperienceType = {
  position: string;
  company: string;
  date: string;
  image: string;
  description: string;
}[];

export const experiences: ExperienceType = [
  {
    position: "Frontend Engineer",
    company: "Springkraf",
    date: "Aug 2024 - Present",
    image: Assets.Experiences.Springkraf,
    description:
      "- Engineered cross-platform web and mobile applications using React.js, Next.js, and React Native (Expo), delivering responsive interfaces tailored to diverse client requirements across multiple industries.<br/>- Architected modular UI component based on Atomic Design principles, significantly improving code reusability, design consistency, and team development speed.<br/>- Applied TypeScript across all projects to enforce strict type safety, catch bugs early in development, and maintain high code quality across growing codebases. <br/>- Integrated APIs and managed application state using React hooks to ensure seamless and responsive data flow. <br/>- Collaborated UI/UX designers and backend developers, to translate designs into functional features and ensure seamless API alignment.",
  },
  {
    position: "Mentor",
    company: "Bangkit Academy led by Google, GoTo, Traveloka",
    date: "Feb 2024 - Jul 2024",
    image: Assets.Experiences.Bangkit,
    description:
      "- Lead and support a cohort of 25 students through weekly mentoring session, fostering their academic and personal growth.<br/>-	Monitor students' learning progress throughout the program to ensure continuous improvement and addressing any challenges promptly.<br/>- Assisted instructors during sessions, monitor activities, and compile detailed reports for up to 14 Instructor-Led Training (ILT) sessions.",
  },
  // {
  //   position: "Frontend Web Developer",
  //   company: "ITFest USU",
  //   date: "Jan 2023 - Apr 2023",
  //   image: Assets.Experiences.ITFestUSU,
  //   description:
  //     "ITFest USU is an annual technology festival organized by the Information Technology Student Association at the University of Sumatera Utara (USU). The event aims to connect professionals, students, and industry players through a series of engaging and educational activities.<br/><br/>- Developed reusable web components to reduce redundancy and improve code maintainability.<br/>- Built and maintained a comprehensive admin dashboard using Laravel and TailwindCSS, ensuring a responsive and user-friendly interface.<br/>- Identifying and fixing existing design issues to ensure consistency across web pages and enhance user experience and functionality.",
  // },
];
