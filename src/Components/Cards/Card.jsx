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
          <img src="../images/card_traumayabuso.png" alt="" />
        ) : project == "2" ? (
          <img src="../images/card_parejafyt.png" alt="" />
        ) : project == "3" ? (
          <img src="../images/card_infanciasytrauma.png" alt="" />
        ) : project == "4" ? (
          <img
            src="../images/card_PatologíasPsiquiátricastratamientoFarmacológico.png"
            alt=""
          />
        ) : project == "5" ? (
          <img src="../images/card_informes.png" alt="" />
        ) : project == "6" ? (
          <img src="../images/card_PsicodiagnósticoInfantil.png" alt="" />
        ) : project == "7" ? (
          <img src="../images/card_roldelps.png" alt="" />
        ) : project == "8" ? (
          <img src="../images/card_difdeaprend.png" alt="" />
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
          <a href="" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "2" ? (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZpXB1GTOoZrvbaAmrYtY4pVdnnaZ_edp9w8Sio_pABEAA/viewform"
            target="_blank"
          >
            <button className="card__link">{button}</button>
          </a>
        ) : project == "3" ? (
          <a href="" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "4" ? (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf80fDPWfekK1jTde1t4h6W185xHeWmN8PJfv4DE85yWoJfuA/viewform"
            target="_blank"
          >
            <button className="card__link">{button}</button>
          </a>
        ) : project == "5" ? (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQTx2fbeluisfqEZK6TJVBRXDXDae5iLWkbW7vQzRbhStWWw/viewform"
            target="_blank"
          >
            <button className="card__link">{button}</button>
          </a>
        ) : project == "6" ? (
          <a href="" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "7" ? (
          <a href="" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : project == "8" ? (
          <a href="" target="_blank">
            <button className="card__link">{button}</button>
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
};
