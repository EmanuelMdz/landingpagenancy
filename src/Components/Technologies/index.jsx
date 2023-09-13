import "./technologies.css";
import React from "react";
import { motion } from "framer-motion";

export const Tech = () => {
  return (
    <motion.div id="tec" className="tec_father">
      <div className="title_tec">
        <h2>Tecnologías</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        className="tech__container"
      >
        <motion.div whileHover={{ scale: 1.1 }} className="son css3">
          <img src="../images/css.png" alt="" />
          <p>CSS3</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son html5">
          <img src="../images/html.png" alt="" />
          <p>HTML5</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son javascript">
          <img src="../images/js.png" alt="" />
          <p>Javascript</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son reactjs">
          <img src="../images/react.png" alt="" />
          <p>React</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son nodejs">
          <img src="../images/node.png" alt="" />
          <p>NodeJS</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son sql">
          <img src="../images/servidor-sql.png" alt="" />
          <p>SQL</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son postgre">
          <img src="../images/postgre.png" alt="" />
          <p>PostgreSQL</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son github">
          <img src="../images/github.png" alt="" />
          <p>Github</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son git2">
          <img src="../images/git.png" alt="" />
          <p>Git</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son npm">
          <img src="../images/npm.png" alt="" />
          <p>NPM</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son express">
          <img src="../images/expressjs_logo.png" alt="" />
          <p>Express</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="son jest">
          <img src="../images/jest.png" alt="" />
          <p>Jest</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
