import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCards({ experience }: Props) {
  return (
    <article
      className="flex flex-col 
    rounded-lg space-y-7 items-center
    w-[500px] md:w-[600px] snap-center
    bg-[#292929] p-10
    "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="w-25 h-25 rounded-full w-[100px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10 overflow-auto scrollbar-thin scrollbar-thumb-[#ef694e]/40">
        <h4 className="text-2xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-1xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((tech) => {
            return (
              <img
                key={tech._id}
                className="w-18 h-12"
                src={urlFor(tech.image).url()}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase my-2 text-gray-300">
          {new Date(experience.dateStarted).toDateString()}-{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc ml-5 text-gray-300  space-y-2 text-lg text-justify">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
