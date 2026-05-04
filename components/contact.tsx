"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import emailjs from "@emailjs/browser";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const form = formRef.current!;
    const senderEmail = (form.elements.namedItem("senderEmail") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_email: senderEmail, name: senderEmail, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Email sent successfully!");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="mt-6 text-white/80">
        Please feel free to contact me directly via email at{" "}
        <a className="underline" href="mailto:thanadet.klinsuban@gmail.com">
          thanadet.klinsuban@gmail.com
        </a>{" "}
        or by using the contact form provided here.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none text-black"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={pending} />
      </form>
    </motion.section>
  );
}
