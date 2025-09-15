import React from 'react'
import  Tilt  from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
// Removed unused scale import

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.05}
      transitionSpeed={400}
      glareEnable={true}           // optional: adds glare effect
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="bottom"
      
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient p-[1px] rounded-[20px]"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center mt-4">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        👋 Hey, I’m Abu Faris ! A curious mind diving deep into the world of tech — currently pursuing B.Tech in Computer Science. I love building cool stuff on the web, tinkering with code, and learning one bug at a time.
        Always up for a challenge, a hackathon, or a late-night open-source sprint.
        Right now, I’m learning JavaScript, React, and exploring the 3D side of things with Three.js — and yep, I’m just getting started.
        Let’s connect and create something impactful together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
