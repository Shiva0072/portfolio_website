import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://www.clipartmax.com/png/middle/308-3089392_medium-size-of-minion-coloring-images-pages-bob-free-despicable-me-colouring.png"
        initial={{
          opacity: 0,
          x: -300,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 
        flex-shrink-0 w-36 h-36 
        rounded-full object-cover 
        md:rounded-lg md:wd-[200px] md:h-[200px] xl:w-[300px] 
        xl:h-[400px]"
      />
      <div className="space-y-10 px-6 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          animi earum repudiandae obcaecati dignissimos dolorum, autem unde
          incidunt doloremque aspernatur tempora, reprehenderit tenetur maxime
          facilis quod! Commodi ex voluptatum id.
        </p>
      </div>
    </motion.div>
  );
}
