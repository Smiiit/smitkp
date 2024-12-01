import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Full Stack Developer with expertise in <b>React.js</b>,{" "}
        <b>Express.js</b>,<b>Node.js</b>, <b>MongoDB</b>, <b>SQL</b>,{" "}
        <b>Python</b> and <b>Power BI</b>. With a strong foundation in both
        Front-End and Back-End development, I specialize in building dynamic and
        scalable web applications. I also have basic knowledge in{" "}
        <b>Cyber Security</b>.
        <br />
        <br />
        In addition to my technical skills, I bring experience in project
        management, team leadership, and effective communication, allowing me to
        drive projects from concept to completion while fostering collaboration
        and delivering high-quality results. Feel free to explore my work and
        connect for potential collaborations!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
