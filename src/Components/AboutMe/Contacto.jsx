import "./AboutMe.css";
import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Contacto = () => {
  /*----------------------------- TYPED ------------------------------  */
  const contact = useRef(null);

  useEffect(() => {
    const typed = new Typed(contact.current, {
      strings: ["No dudes en contactar!"],
      typeSpeed: 100,
      backSpeed: 100,
      cursorChar: "|",
      startDelay: 500,
      backDelay: 3000,
      loop: true,
      loopCount: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      id="contacto"
      className="father"
    >
      <div className="text_type">
        {" "}
        <span className="title_animated" ref={contact}></span>
      </div>

      <div className="datos_container">
        <div className="g">
          <div className="gmail_image">
            <img src="../images/Gmail_icon.svg.png" alt="" />
          </div>
          <div className="gmail">psiconancymori@gmail.com</div>
        </div>

        {/* <div className="git">
          <a href="https://github.com/EmanuelMdz" target="/blank">
            <img src={`../images/github-mark-moon.png`} alt="" />
          </a>
          <p>Github</p>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/emanuel-mendoza-43b071268/"
            target="/blank"
          >
            <img src={`../images/linkedinblack-moon.png`} alt="" />
          </a>
          <p>Linkedin</p>
        </div> */}
        {/* 
        <div className="c">
          {" "}
          <div className="cel_image">
            <img src="../images/telefono-inteligente.png" alt="" />
          </div>
          <div className="cel">+598 092 90 12 61</div>
        </div> */}
      </div>
      <div className="derechos">
        <p>
          Web desarrollada por{" "}
          <a href="https://emanuelmendoza.lat">Emanuel Mendoza</a>
        </p>
      </div>
    </motion.div>
  );
};
