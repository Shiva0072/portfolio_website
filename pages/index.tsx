import type { NextPage } from "next";
import Head from "next/head";
import { HomeIcon } from "@heroicons/react/24/solid";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
    "
    >
      <Head>
        <title>Shivam Portfolio</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <footer className="sticky bottom-5">
        <div className="w-20 flex justify-center ">
          <Link href="#hero">
            <HomeIcon
              className="h-7 w-7 cursor-pointer
              text-gray-500 hover:text-white
              "
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
/*
snap works for child components after setting the snap for the parent components.

*/
