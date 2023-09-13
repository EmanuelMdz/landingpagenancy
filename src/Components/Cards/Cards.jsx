import React from "react";
import { Card } from "./Card";
import "./card.css";

export const Cards = () => {
  return (
    <div id="proyectos" className="seccion__project__container">
      <a href="#projects">
        <h1>Proyectos</h1>
      </a>
      <div className="cards__container" id="projects">
        <Card
          project="1"
          title="Pokedex API"
          p="Proyecto en el cual se utilizó la API de pokemones para hacer una pokedex totalmente funcional"
          button="Ir al Proyecto"
        ></Card>
        <Card
          project="2"
          title="Fylo"
          p="Fylo  es un proyecto para practicar el desarrollo front-end de una web moderna en react"
          button="Ir al Proyecto"
        ></Card>
        <Card
          project="3"
          title="TODO"
          p="TODO es un proyecto hecho en react, cuenta con funcionalidades como drag and drop, ordnar, filtrados y modo nocturno "
          button="Ir al Proyecto"
        ></Card>
        <Card
          project="4"
          title="FLEX"
          p="Flex es un proyecto que programe al comenzar con HTML y CSS, es bastante visual y tiene funciones como el modal en Iniciar Sesión "
          button="Ir al Proyecto"
        ></Card>
        <Card
          project="5"
          title="CARD"
          p="Es un proyecto en el cual mediante JavaScript validé una tarjeta y dibujé en tiempo real los campos"
          button="Ir al Proyecto"
        ></Card>
      </div>
      <div className="gototop"></div>
    </div>
  );
};
