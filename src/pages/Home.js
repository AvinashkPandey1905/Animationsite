import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Animebyme
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 900,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 0.5,
        }}
        transition={{ duration: 1 }}
      >
        <font>Creating an animations and interactive responsive</font> Websites an also making a<font> 2D & 3D Models</font> 
      </motion.div>
    </div>
  );
};

export default Home;
