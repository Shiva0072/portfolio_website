import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function SkillCard({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500
        object-cover
        md:w-18 md:h-18  
        w-14 h-15
        md:w-20 md:h-20
        filter group-hover:grayscale transition duration-200 ease-in-out
        "
      />
      <div
        className="absolute opacity-0 
         group-hover:opacity-80 
         group-hover:bg-white
        rounded-full  
        md:w-18 md:h-18  
        xl:w-20 xl:h-20
        justify-center items-center 
        flex h-full w-full
        transition duration-300 ease-in-out
      "
      >
        <p className="text-1.5xl font-bold text-black opacity-100">
          {skill.progress}%
        </p>
      </div>
    </div>
  );
}
