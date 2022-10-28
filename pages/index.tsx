import type { GetStaticProps } from "next";
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
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchExperiences } from "../utils/fetchExperiences";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, projects, skills, socials, experiences }: Props) => {
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
      <Header socials={socials} />

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
              text-gray-500 hover:text-[#f7ab0a]/40
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
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  const experiences: Experience[] = await fetchExperiences();

  return {
    props: {
      pageInfo,
      projects,
      skills,
      socials,
      experiences,
    },
    //next.js will attempt to regenerate the page:
    // -When a request comes in
    // -At most once in 100 seconds
    revalidate: 100,
  };
};
