import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

export default function SkillCard({ directionLeft }: Props) {
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
        // src="https://yt3.ggpht.com/ytc/AMLnZu8I-9GzTYSIayWeJssfYhxLLxzTjhPLNE0fLELSLg=s900-c-k-c0x00ffffff-no-rj"
        src="https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k"
        className="rounded-full border border-gray-500
        object-cover
        w-14 h-15
        md:w-16 md:h-16
      xl:w-19 xl:h-18
        filter group-hover:grayscale transition duration-200 ease-in-out
        "
      />
      <div
        className="absolute opacity-0 
      group-hover:opacity-80 
      group-hover:bg-white
      rounded-full  md:w-16 md:h-16
      xl:w-19 xl:h-18
    justify-center items-center 
      flex h-full w-full
      transition duration-300 ease-in-out
      "
      >
        <p className="text-1.5xl font-bold text-black opacity-100">100%</p>
      </div>
    </div>
  );
}
