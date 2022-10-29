import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  about: PageInfo;
};

export default function About({ about }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col relative h-screen
    text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        About
      </h3>
      <motion.img
        src={urlFor(about?.profilePic).url()}
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
        flex-shrink-0 w-46 h-36 
        rounded-full object-cover 
        md:rounded-lg md:wd-[150px] md:h-[200px] xl:w-[300px] 
        xl:h-[400px]"
      />
      <div className="space-y-10 px-6 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here's a{" "}
          <span className="underline decoration-[#ef694e]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-lg ">{about.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
/*

Hello, My name is Shivam Verma. I am final year dual-degree student at IIT Kharagpur. 
I am majoring in Naval Architecture and Ocean Engineering. I enjoy coding which I 
discovered only after doing a research intern where I was needed to solve a complex theoretical 
problem using numerical methods which was to be coded into python. I really enjoyed that 
intern and it proved to be a turning point in my professional career. Since then I have been 
learning new technologies. 


*/
