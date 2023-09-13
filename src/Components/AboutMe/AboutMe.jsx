import "./AboutMe.css";
import React from "react";
import { motion } from "framer-motion";
export const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      id="aboutme"
      className="aboutme__container"
    >
      <div className="section skills">
        <h3>Experiencia laboral</h3>
        <p>
          {" "}
          Gestión de redes y creación de contenido para las redes sociales
          (2020-2023){" "}
        </p>
        <p>
          Director y editor en proyectos, creando cursos de alta calidad desde
          0. (2021)
        </p>
        <p>
          Vendedor de cursos online vía correo electrónico y redes sociales.
          manejando bases de datos .(2022)
        </p>
      </div>
      <div className="section historial">
        <h3>Historial academico</h3>
        <div>
          <p> Senpai Academy DESARROLLADOR WEB FULL STACK (2023)</p>
          <p> Colegio y Liceo Pallotti ORIENTACIÓN CIENTÍFICA - ECONÓMICA</p>
          <p>
            {" "}
            Sistemas Inversores TRADING AUTOMÁTICO INTELIGENTE UTILIZANDO
            MACHINE LEARNING ( desde 2021)
          </p>{" "}
          <p>
            Microsoft y LinkedIn CURSO Fundamentos profesionales de asistencia
            administrativa, por Microsoft y LinkedIn
          </p>
        </div>
      </div>
      <div className="section xp">
        <h3>Habilidades</h3>
        <div>
          <p>
            Desarrollo y mantenimiento de sitios web. Uso de GitHub y
            metodología Scrum.
          </p>

          <p>
            Experiencia en lenguajes como HTML, CSS JavaScript y Phyton básico
          </p>
          <p>
            Experiencia en React.js y Express para el back-end y creación de API
            REST. Muy buen manejo de SQL, trabajando normalmente con postgreSQL,
            experiencia en Testing con Jest
          </p>
          <p>Creador de contenido con experiencia y manejo de campañas.</p>
        </div>
      </div>
      <div className="section ">
        <h3>Otros conocimientos</h3>
        <div>
          <p>Nivel intermedio-avanzado de Excel </p>
          <p>
            {" "}
            Uso cotidiano de herramientas como Photoshop, Canva, LightRoom, etc.
          </p>{" "}
          <p>
            Entendimiento y manejo de la herramienta Weka, trabajando con
            arboles de desición y big data
          </p>
        </div>
      </div>
    </motion.div>
  );
};
