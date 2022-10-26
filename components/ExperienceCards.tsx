import React from "react";
import { motion } from "framer-motion";

type Props = {};
/*

space-y-7 flex-shrink-0  
w-[500px] md:w-[600px] xl:w-[900px] snap-center
bg-[#292929] p-10

*/
export default function ExperienceCards({}: Props) {
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
        className="w-25 h-25 rounded-full xl:w-[100px] object-cover object-center"
        src="https://play-lh.googleusercontent.com/Us16LmGy_PeXSn6f-OTVqC6Kxm52yMiSxeLJN-fcLp-DKNark8Tu4t5UIKlTgBc6Ijc"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">React-Native Developer</h4>
        <p className="font-bold text-1xl mt-1">Citymall.live</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10"
            src="https://logosdownload.com/logo/javascript-logo-512.png"
            alt=""
          />
          <img
            className="w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt=""
          />
          <img
            className="w-10 h-10"
            src="https://camo.githubusercontent.com/edc736634dd35b0f4008e2f7db456136b9fc0e1e7a4078bb72c7352b1bdf8a7e/68747470733a2f2f776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6373732d332e737667"
            alt=""
          />
          <img
            className="w-10 h-10"
            src="https://logosdownload.com/logo/javascript-logo-512.png"
            alt=""
          />
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase my-2 text-gray-300">
          Started work... -Ended...
        </p>
        <ul className="list-disc ml-5  space-y-2 text-lg">
          <li>Summary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary points</li>
          <li>Summary pointsSummary pointsSummary points</li>
        </ul>
      </div>
    </article>
  );
}
