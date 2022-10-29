import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { Skill } from "../typings";
type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
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
      <h3 className="top-24 text-2xl text-gray-300 absolute uppercase tracking-widest">
        skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#ef694e] text-sm">
        familiarity with technologies
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
