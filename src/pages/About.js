import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              
            </p>
            <p>
              
            </p>
            <h2>Sub-header</h2>
            <p>
              
            </p>
            <p>
              
            </p>
            <p>

            </p>
            <p>
              
            </p>
            <h2>Sub-header</h2>
            <p>
              
            </p>
            <p>
              
            </p>
            <p> </p>
            <p>

            </p>
            <p>
              
            </p>
            <p>
              
            </p>
            <h2>Sub-header</h2>
            <p>
              
            </p>
            <p>
              
            </p>
            <p>

            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
