import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "",
      imageUrl: project1,
    },
    {
      id: 4,
      name: "",
      imageUrl: project2,
    },
    {
      id: 5,
      name: "",
      imageUrl: project1,
    },
    {
      id: 6,
      name: "",
      imageUrl: project2,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  {/* <Card.Title>{item.name}</Card.Title> */}
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
