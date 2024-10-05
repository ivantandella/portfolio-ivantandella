export type ExperienceType = {
  position: string;
  company: string;
  date: string;
  image: string;
  description: string;
}[];

export const experiences = [
  {
    position: "Frontend Engineer",
    company: "Springkraf",
    date: "Aug 2024 - Present",
    image: "/images/experiences/springkraf.png",
    description:
      "- Developed responsive web application using React JS and Next.js.<br/>- Implementing athomic design methodology to break down UI elements into reuseable components for improved maintainability.<br/>-	Collaborated with Backend dan Design teams to ensure seamless integration.-	Utilized TypeScript for better type management and code clarity.",
  },
  {
    position: "Mentor",
    company: "Bangkit Academy led by Google, GoTo, Traveloka",
    date: "Feb 2024 - Jul 2024",
    image: "/images/experiences/bangkit.png",
    description:
      "Mentor plays a crucial role in guiding participants and providing a supportive learning environment that boosts students' motivation.<br/>- Lead and support a cohort of 25 students through weekly mentoring session, fostering their academic and personal growth.<br/>- Monitor students' learning progress throughout the program to ensure continuous improvement and addressing any challenges promptly.<br/>- Organize and facilitate 3 study group sessions to assist students facing difficulties to enhance their understanding and performance.<br/>- Assist instructors during sessions, monitor activities, and compile detailed reports for up to 14 Instructor-Led Training (ILT) sessions.",
  },
  {
    position: "Frontend Web Developer",
    company: "ITFest USU",
    date: "Jan 2023 - Apr 2023",
    image: "/images/experiences/itfestusu.png",
    description:
      "ITFest USU is an annual technology festival organized by the Information Technology Student Association at the University of Sumatera Utara (USU). The event aims to connect professionals, students, and industry players through a series of engaging and educational activities.<br/>- Developed web components including radio buttons, status tags, statistics cards, and tooltips to enhance user experience and functionality.<br/>- Built and maintained a comprehensive admin dashboard using Laravel and TailwindCSS, ensuring a responsive and user-friendly interface.<br/>- Identifying and fixing existing design issues to ensure consistency and high visual quality across web pages.",
  },
];
