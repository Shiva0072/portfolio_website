import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="h-screen flex relative overflow-hidden flex-col 
    text-lft md:flex-row max-w-full px-10 mx-auto
    justify-evenly items-center
       
    "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 p-10 mt-20
        overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory
        scrollbar-thin
    scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
    
        "
      >
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
        <ExperienceCards />
      </div>
    </motion.div>
  );
}
