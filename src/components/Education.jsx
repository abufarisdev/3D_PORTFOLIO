import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School } from 'lucide-react';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import schoolIcon from '../assets/stads.jpeg'; // Adjust path if needed
import collegeIcon from '../assets/svu.png'

const educations = [
  {
    title: "Class X – St. Augustine's Day School, Kolkata",
    date: '2010 – 2021',
    icon: (
      <img 
        src={schoolIcon} 
        alt="STADS" 
        className="w-full h-full object-cover rounded-full" 
      />
    ),
    description: 'Scored 95.4% in ICSE.',
  },
   {
    title: "Class XII – St. Augustine's Day School, Kolkata",
    date: '2021 – 2023',
    icon: (
      <img 
        src={schoolIcon} 
        alt="STADS" 
        className="w-full h-full object-cover rounded-full" 
      />
    ),
    description: 'Scored 82.5% in ISC.',
  },
  // ... (same for Class XII)
  {
    title: 'B.Tech in CSE – Swami Vivekananda University, Barrackpore',
    date: '2024 – Present',
    icon: (
      <img 
        src={collegeIcon} 
        alt="SVU" 
        className="w-full h-full object-contain" // SVU's logo likely already fits
      />
    ),
    description: 'Currently pursuing Computer Science Engineering. SGPA: 8.86 (Sem 1)',
  },
];
const Education = () => {
  return (
    <motion.section id="education" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={{}} className="mb-10">
        <p className={styles.sectionSubText}>What I've Studied</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              date={edu.date}
              iconStyle={{ background: '#1d1836', color: '#fff' }}
              icon={edu.icon}
              contentStyle={{ background: '#2c2c2c', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            >
              <h3 className="text-white text-[24px] font-bold">{edu.title}</h3>
              <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
                {edu.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Education;
