import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 3, 3, 45, 6];

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
        text-gray-500 
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
    scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
        "
      >
        {projects.map((project, indx) => {
          return (
            <div
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
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="https://static-02.hindawi.com/articles/ace/volume-2020/9703560/figures/9703560.fig.009.jpg"
              />
              <div
                className="
               px-0
               md:px-10
                max-w-6xl
                bg-red-300
            "
              >
                <h4 className="text-2xl font-semibold text-center">
                  <span
                    className="underline 
                  decoration-[#F7AB0A]/50 "
                  >
                    {indx + 1} of {projects.length}:
                  </span>{" "}
                  Helmet detection
                </h4>
                <p className=" text-center md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Amet, distinctio adipisci assumenda quas voluptatum soluta
                  ipsam alias doloremque quia sint quam perspiciatis iste,
                  recusandae aspernatur odio expedita laborum accusantium. Cum!
                </p>
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
      bg-[#F7AB0A]/10 
      top-[30%]
      "
      ></div>
    </motion.div>
  );
}
