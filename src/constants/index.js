
  import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

import sakshamImg from '../assets/saksham.jpeg'; // adjust path if file is in another folder
import anubhavImg from '../assets/anubhav.jpeg';
import adityaImg from '../assets/aditya.jpg';
import social from "../assets/social.jpeg"; // ✅ Required if using a local image
import gssoc from "../assets/gssoc.jpg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education", 
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "3D Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 {
  title: "Video Editor", 
  icon: creator,
 }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
import gdg from '../assets/gdg.png'; // adjust the path if needed
import { title } from "framer-motion/client";
import crypton from '../assets/crypton.png'

const experiences = [
    {
  title: "Open Source Contributor",
  company_name: "GirlScript Summer of Code 2025",
  icon: gssoc, 
  iconBg: "#ffffff", 
  date: "July 2025 - Present",
  points: [
    "Contributing to beginner-friendly open source projects.",
    "Working on automation tools like birthday greeting bots and AI resume platforms.",
    "Learning and applying real-world Git, GitHub, and collaborative workflows.",
  ],
},
  {
    title: "Campus Ambassador",
    company_name: "GirlScript Summer of Code 2025",
    icon: gssoc,
    iconBg: "#ffffff",
    date: "June 2025 - Present",
    points: [
       "Promoting open-source culture on my campus",
       "Helping fellow students get started with Git, GitHub, and open-source contributions",
       "Representing my college in this nationwide initiative",
    ],
  },

  {
  title: "Open Source Contributor",
  company_name: "Social Summer of Code 2025",
  icon: social, 
  iconBg: "#000000", 
  date: "June 2025 - Present",
  points: [
    "Contributing to beginner-friendly open source projects.",
    "Working on automation tools like birthday greeting bots and AI resume platforms.",
    "Learning and applying real-world Git, GitHub, and collaborative workflows.",
  ],
},

{
    title: "Student Member",
    company_name: "GDG Kolkata",
    icon: gdg,
    iconBg: "#ffffff",
    date: "November 2024 - Present",
    points: [
       "Attended DevFest Kolkata 2024 and other GDG-hosted tech events.",
       "Learning about web, ML, and Google Cloud through community-led sessions.",
       "Exploring open source and developer tools through GDG resources.",
    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Working with Abu was a game-changer. His creativity and dedication make him stand out in any project!",
    name: "Saksham Jaiswal",
    designation: "B.Tech CSE-1st Year",
    company: "IIIT Kalyani",
    image: sakshamImg, // imported variable
  },
  {
    testimonial:
    "Abu’s passion for tech is contagious. He turns complex ideas into clean, efficient solutions effortlessly.",
    name: "Anubhav Jaiswal",

    designation: "B.Tech CSE-2nd Year",
    company: "Lovely Professional University",
    image: anubhavImg,
  },
  {
    testimonial:
      "Abu is a brilliant problem-solver! His coding skills and attention to detail helped our team deliver projects faster.",
    name: "Aditya Mishra",
    designation: "B.Tech CSE-1st Year",
    company: "Swami Vivekananda University",
    image: adityaImg,
  }
];

const projects = [
  {
    name: "Crypto Dashboard",
    description:
      "A React-based cryptocurrency tracking dashboard with live data from the CoinGecko API. Includes charts, responsive UI, and real-time market updates for multiple coins.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
    ],
    image: crypton, 
    source_code_link: "https://github.com/abufarisdev/crypton",
    live_link: "https://crypton-wheat.vercel.app", 
  },

  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };