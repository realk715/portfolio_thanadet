import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Economics (First-Class Honours)",
    description: [
      "Kasetsart University, Sriracha",
      "Strong foundations in macroeconomic theory, monetary economics, game theory, and quantitative analysis.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Applied Economics Researcher (Digital Assets Focus)",
    description: [
      "Academic Research | Kasetsart University, Sriracha",
      "Applied macro and microeconomic frameworks to evaluate cryptocurrency, NFT, and GameFi market structure and asset valuation.",
      "Analysed the relationship between macroeconomic variables (interest rates, inflation) and cryptocurrency market cycles during the high-volatility period of 2020–2022.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Independent Digital Asset Analyst & Researcher",
    description: [
      "Conducted fundamental analysis of DeFi protocols — VC funding rounds, tokenomics structures, and systemic liquidity risks.",
      "Deployed and maintained blockchain validator and data nodes for 0G Labs (backed by over $350M in funding).",
      "Utilised AI-assisted scripting tools to automate on-chain transactions and research workflows.",
      "Investigated and mitigated on-chain wallet vulnerabilities, including recovery of assets from sweeper-bot attacks.",
      "Applied game theory to evaluate user participation structures within early-stage Web3 ecosystems.",
      "Monitored macroeconomic developments and assessed their impact on global asset markets.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [

] as const;

export const skillsData = [
  "Macroeconomics",
  "Monetary Economics",
  "Game Theory",
  "Behavioural Economics",
  "Systemic Risk Assessment",
  "DeFi",
  "Tokenomics",
  "On-Chain Data",
  "Blockchain Security",
  "Digital Asset Valuation",
  "AI Research & Automation",
  "Prompt Engineering",
  "TypeScript",
  "Node.js",
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
