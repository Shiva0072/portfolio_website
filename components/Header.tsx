import React from "react";
import Link from "next/link";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((item) => {
          return (
            <SocialIcon
              key={item._id}
              url={item.url}
              fgColor="#ef694e"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-[#ef694e] cursor-pointer"
      >
        <Link href="#contact">
          <div>
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="#ef694e"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-[#ef694e]">
              Get In Touch
            </p>
          </div>
        </Link>
        <a
          className="mx-3 mb-1"
          href="https://drive.google.com/file/d/1qG32m7n8gTBMDnvtFxuSPqbMM2Hsu8Jg/view?usp=sharing"
        >
          CV
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
