"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      First-Class Honours graduate in Economics from Kasetsart University (Sriracha), with expertise in macroeconomic theory, monetary economics, and quantitative analysis. As an Economist, Policy Analyst, and Digital Finance Researcher, I bring over five years of applied experience in digital asset markets and decentralised finance.
      </p>
      <p className="mb-3">
      I bridge traditional economic frameworks with emerging financial technologies, conducting fundamental analysis of DeFi protocols, evaluating tokenomics structures, and assessing systemic liquidity risks. My hands-on work includes deploying blockchain validator nodes, investigating on-chain vulnerabilities, and applying game theory to evaluate Web3 ecosystems. I integrate AI-assisted tools to automate research workflows and enhance analytical precision.
      </p>
      <p>
      Bilingual in Thai and English (CEFR B2 / TOEIC 855), I am equipped for engagement with international research, policy documentation, and cross-functional collaboration.
      </p>

     
    </motion.section>
  );
}
