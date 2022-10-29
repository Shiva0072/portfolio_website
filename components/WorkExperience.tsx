import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
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
      <h3
        className="absolute top-24 uppercase 
      tracking-[20px] text-gray-300 text-2xl"
      >
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 p-10 mt-20
        overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory
        scrollbar-thin
        h-[80%]
    scrollbar-track-gray-300 scrollbar-thumb-[#ef694e]/80
    
        "
      >
        {experiences?.map((experience) => {
          return (
            <ExperienceCards key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}
