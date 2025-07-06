import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import FullscreenLoader from "./FullscreenLoader"; // ✅ Use this instead of CanvasLoader

const Hero = ({ device }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // adjust if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      {isLoading ? (
        <FullscreenLoader />
      ) : (
        <div className="fade-in">
          {/* Icons & Text */}
          <div className="absolute inset-0 z-[20] pointer-events-none">
            <div className={`absolute top-[40px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
              </div>

              <div>
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <span className="text-[#915EFF]">Abu</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                  I develop 3D visuals, user <br className="sm:block hidden" />
                  interfaces and web applications
                </p>

                <motion.div 
                  className="flex gap-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <motion.a href="https://linkedin.com/in/abufaris" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white text-2xl hover:text-[#915EFF] transition-colors block">
                    <FaLinkedin />
                  </motion.a>
                  <motion.a href="https://drive.google.com/file/d/1r3Fr6Ua7ufFG1awIj9deJci4eyp7uZJn/view?usp=drive_linksume.docx" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white text-2xl hover:text-[#915EFF] transition-colors block">
                    <FaFileDownload />
                  </motion.a>
                  <motion.a href="https://github.com/abufarisdev" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white text-2xl hover:text-[#915EFF] transition-colors block">
                    <FaGithub />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 3D Model */}
          {device !== "mobile" ? (
            <ComputersCanvas />
          ) : (
            <div className="w-full h-[350px] bg-black flex items-center justify-center text-white z-10">
              <p className="text-lg">3D Model disabled on mobile</p>
            </div>
          )}

          {/* Scroll Button */}
          <div className="absolute xs:bottom-20 bottom-48 w-full flex justify-center items-center z-10">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{ y: [0, 24, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
