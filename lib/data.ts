import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/public/images/Colmar_project.png"
import project2 from '@/public/images/todolist_project.png'
import project3 from '@/public/images/ciniverse_project.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Studied",
    description:
      "I am studying in the Faculty of Economics at the university, and in addition, I am learning about crypto, NFTs, and GameFi to generate income simultaneously",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "Create Own project",
    description:
      "I am learning to create projects on my own and studying soft skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-present",
  },
] as const;

export const projectsData = [
  {
    title: "COLMARACADEMY",
    description:" Colmaracademy is a project used for practicing CSS.",
    tags: ["Html", "Css"],
    imageUrl:project1,
    git:"https://github.com/realk715"
  },
  {
    title: "To Do List",
    description:
      "The To Do List project offers an efficient task and to do list management solution. It features a user account system for registered users to create, edit, and organize tasks. Users can log in with unique usernames to access personalized to do lists.",
    tags: ["React", "vite.js", "Mysql", "Sequelize", "Node.js"],
    imageUrl:project2,
    git:"https://github.com/realk715/todolist"
  },
  {
    title: "Ciniverse",
    description:
      " Ciniverse is a project with user accounts, offering movie details and an easy movie title search. Users can log in to access and search for movie information seamlessly within the Ciniverse . ",
    tags: ["React", "Next.js", "Tailwind", "Node.js","MongoDb"],
    imageUrl:project3,
    git:"https://github.com/realk715/project_ciniverse"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind",
  "MongoDB",
  "Mysql",
  "Sequelize",
] as const;

export const softSkillsData = [
  "Communication",
  "Emotional intelligence",
  "Adaptability",
  "Creativity",
  "Problem solving",
  "Patience",
  "Self-awareness",
  "Time management",
  "Negotiation",
  "Collaboration",
] as const;
