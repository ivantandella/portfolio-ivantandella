import { Assets } from "@/constants/assets";

export type ProjectType = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  liveLink?: string;
  isMobileMockup?: boolean;
};

export const projects: ProjectType[] = [
  {
    title: "Forum Thread App",
    image: Assets.Projects.Forum,
    description:
      "A robust forum-based application enabling users to register, create threads, vote, and engage in real-time discussions with async state management.",
    technologies: ["Next.js", "Mantine", "TypeScript", "TanStack Query"],
    link: "https://github.com/ivantandella/forum-next-js",
    liveLink: "https://github.com/ivantandella/forum-next-js",
  },
  {
    title: "Notes App",
    image: Assets.Projects.Notes,
    description:
      "A modern note-taking web app with archive, search, and instant deletion capabilities wrapped in a clean responsive UI.",
    technologies: ["React", "TypeScript", "Mantine", "Vite"],
    link: "https://github.com/ivantandella/notes-react",
    liveLink: "https://github.com/ivantandella/notes-react",
    isMobileMockup: true,
  },
  // {
  //   title: "Inventory Management System",
  //   image: Assets.Projects.Inventory,
  //   description:
  //     "Web-based warehouse inventory tracking application with real-time stock updates, CRUD operations, and analytical reporting.",
  //   technologies: ["Laravel", "TailwindCSS", "MySQL", "PHP"],
  //   link: "https://github.com/ivantandella/Inventory-Management-App",
  // },
  // {
  //   title: "Computer-Based Test (CBT)",
  //   image: Assets.Projects.CBT,
  //   description:
  //     "Online exam platform for educational institutions allowing question creation, timer configuration, and automated scoring.",
  //   technologies: ["Laravel", "Bootstrap", "MySQL"],
  //   link: "https://github.com/ivantandella/CBT-App",
  // },
  // {
  //   title: "Student Data Management System",
  //   image: Assets.Projects.StudentManagement,
  //   description:
  //     "Student record management portal with filtering, search, pagination, and multi-role data controls.",
  //   technologies: ["Laravel", "TailwindCSS", "JavaScript"],
  //   link: "https://github.com/ivantandella/Student-Management-System-Laravel",
  // },
  // {
  //   title: "E-Wallet App (LinkAja Clone)",
  //   image: Assets.Projects.LinkAja,
  //   description:
  //     "Digital payment platform prototype replicating e-wallet transactions, balance management, and transaction history.",
  //   technologies: ["Laravel", "TailwindCSS", "PHP"],
  //   link: "https://github.com/ivantandella/eWallet-WebApp",
  // },
  // {
  //   title: "Maimoon Mobile App Prototype",
  //   image: Assets.Projects.Maimoon,
  //   description:
  //     "Tourism mobile application prototype for Istana Maimun featuring AR camera views and digital ticketing system.",
  //   technologies: ["UI/UX", "Figma", "Mobile Design"],
  //   link: "https://github.com/ivantandella/Maimoon-UI",
  //   isMobileMockup: true,
  // },
];
