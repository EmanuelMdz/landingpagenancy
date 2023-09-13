import React from "react";
import "./main.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";
import { motion } from "framer-motion";

export const Main = ({ theme, setTheme }) => {
  /*----------------------------- return ------------------------------  */
  return (
    <>
      <div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        id="inicio"
        className="hero_container"
      >
        <div className="txt">
          {" "}
          <div className="title_hero">
            <span className="title_animated">NANCY MORI </span>
          </div>
          <div className="aboutme_hero">
            <p>
              {" "}
              Desde hace muchísimos años estoy formándome en el mundo de la
              educación y la salud emocional. Inicié trabajando durante más de
              20 años como maestra de diferentes grados, psicopedagoga y más
              tarde en mi gran pasión, la psicología, en donde he profundizado
              en diferentes modelos teóricos. Trabajo a nivel clínico
              individual, grupal y como docente de diferentes formaciones:
              Psicodiagnóstico, psicología educacional, dificultades de
              aprendizaje, trauma y Abuso, pareja, familia y trauma, así como
              trauma en infancias....{" "}
            </p>
          </div>
        </div>

        <a
          className="wpp_btn"
          href="https://wa.me/+598092901261"
          target="_blank"
        >
          <img src="../images/whatsapp.png" alt="" />
        </a>
        <div className="second_hero_container">
          <img src="../images/nancymoriimghero.png" alt="" />
        </div>
      </div>
    </>
  );
};
