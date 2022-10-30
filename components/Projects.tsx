import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.9 }}
      className="flex flex-col relative 
      h-screen

      overflow-hidden text-left
      md:flex-row 
      max-w-full
     justify-evenly mx-auto items-center
     z-0"
    >
      <h3
        className="absolute
       top-24 uppercase 
       tracking-[20px]
        text-gray-300 
        text-2xl"
      >
        Projects
      </h3>

      <div
        className="relative w-full flex 
        overflow-x-scroll
        overflow-y-hidden
        snap-x
        snap-mandatory
        z-20
        scrollbar-thin
    scrollbar-track-gray-300 scrollbar-thumb-[#ef694e]
        "
      >
        {projects?.map((project, indx) => {
          return (
            <div
              key={project._id}
              className="flex-shrink-0
                space-x-5
                p-20
                w-screen
                flex
                flex-col
                space-y-5
                justify-center
                items-center
                snap-center
                md:p-44
                h-screen
            "
            >
              <motion.img
                className="object-cover h-[100px] md:h-[200px] lg:h-[300px]"
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
              />
              <div
                className="
               px-0
               md:px-10
                max-w-6xl
            "
              >
                <h4 className="text-2xl font-semibold text-center">
                  <span
                    className="underline 
                  decoration-[#ef694e]/50 "
                  >
                    {indx + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>

                <div className="flex items-center space-x-2 mb-4 mt-4 justify-center">
                  {project?.technologies.map((tech) => (
                    <img
                      className="h-10 w-12 md:h-15 md:w-18"
                      key={tech?._id}
                      src={urlFor(tech?.image).url()}
                    />
                  ))}
                </div>

                <p className=" text-center text-gray-300 md:text-left">
                  {project?.summary}
                </p>
                <a href={project?.linkToBuild}>Link to Build</a>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="w-full 
        absolute
        left-0
      -skew-y-12 h-[300px] 
      bg-[#ef694e]/10
      top-[30%]
      "
      ></div>
    </motion.div>
  );
}
