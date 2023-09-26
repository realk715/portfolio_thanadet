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
      I graduated from the Faculty of Economics with first-class honors from Kasetsart University, Sriracha Campus. However, I decided to pursue a career as a full-stack developer on my own. I embarked on this journey through resources such as YouTube, ChatGPT, and Stack Overflow, determined to follow my dreams. I'm always ready to learn new things, even when they are challenging. I believe in my ability to overcome difficulties    </p>

      <p>
      During my free time, I also dedicate time to studying cryptocurrency. I have more than three years of experience in the cryptocurrency field.
      </p>
    </motion.section>
  );
}
