import React from "react";
import "./card.css";
import { motion } from "framer-motion";
export const Card = ({ title, p, project, button }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="card__container"
    >
      {/* ---Images---- */}
      <div className="card__image">
        {project == "1" ? (
          <img
            src="https://nintenduo.com/wp-content/uploads/2023/01/Pokemon-Famosos-Mundo-00-1200x900.webp"
            alt=""
          />
        ) : project == "2" ? (
          <img
            src="https://shots.codepen.io/username/pen/MxeJJN-800.jpg?version=1604607599"
            alt=""
          />
        ) : project == "3" ? (
          <img src="../images/TODO LIST.png" alt="" />
        ) : project == "4" ? (
          <img src="../images/Flex.png" alt="" />
        ) : project == "5" ? (
          <img src="../images/card.png" alt="" />
        ) : (
          <div></div>
        )}
      </div>
      {/* ---Text---- */}
      <div className="card__text">
        <div className="card__title">
          <h2>{title}</h2>
        </div>
        <div className="card__p">
          <p>{p}</p>
        </div>
        {project == "1" ? (
          <a href="https://pokedex-eight-chi.vercel.app/" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "2" ? (
          <a
            href="https://fylo-page-react-vite-emanuel-mendoza.vercel.app/"
            target="_blank"
          >
            <button className="card__link">{button}</button>
          </a>
        ) : project == "3" ? (
          <a href="https://sprint6-flame.vercel.app/" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "4" ? (
          <a href="https://emanuelmdz.github.io/" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "5" ? (
          <a href="https://cardvalidation-i8pc.vercel.app/" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
};
