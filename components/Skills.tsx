import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
type Props = {};

/*

absolute top-36 uppercase tracking-[3px] <text-gray-500
text-sm

*/

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative h-screen flex flex-col 
      text-center items-center justify-center
      md:text-left xl:flex-row-y-0 xl:px-10 min-h-screen
      xl:flex-row max-w-[2000px] xl:space-y-0 mx-auto"
    >
      <h3 className="top-24 text-2xl text-gray-500 absolute uppercase tracking-widest">
        skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </motion.div>
  );
}
