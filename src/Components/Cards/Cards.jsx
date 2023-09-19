import React from "react";
import { Card } from "./Card";
import "./card.css";

export const Cards = () => {
  return (
    <div id="proyectos" className="seccion__project__container">
      <a href="#projects">
        <h1>Información de cursos</h1>
      </a>
      <div className="cards__container" id="projects">
        <Card
          project="1"
          title="Trauma y Abuso"
          p="Descubre como Intervenir en el Trauma del Abuso y sus secuelas"
          button="Obtener Información"
        ></Card>
        <Card
          project="2"
          title="Pareja, Familia y Trauma "
          p="Marca la diferencia en tu intervención en violencia intrafamiliar"
          button="Obtener Información"
        ></Card>
        <Card
          project="3"
          title="Infancias y Trauma"
          p="Transforma tu intervención desde la Teoría del Trauma"
          button="Obtener Información"
        ></Card>
        <Card
          project="4"
          title="Patologías Psiquiátricas y su tratamiento Farmacológico "
          p="Alcanza una comprensión profunda desde la práctica clínica."
          button="Obtener Información"
        ></Card>
        <Card
          project="5"
          title="Elaboración de Informes Psicológicos"
          p="Estrategias innovadoras para elaborar tus informes."
          button="Obtener Información"
        ></Card>
        <Card
          project="6"
          title="Psicodiagnóstico Infantil"
          p="Cómo elaborarlo paso a paso"
          button="Obtener Información"
        ></Card>
        <Card
          project="7"
          title="Rol del psicólogo en Instituciones educativas"
          p="Una oportunidad para reinventarte"
          button="Obtener Información"
        ></Card>
        <Card
          project="8"
          title="Dificultades de Aprendizaje: “De la Teoría al Aula”"
          p="Recursos para comprender e intervenir en dificultades de aprendizaje"
          button="Obtener Información"
        ></Card>
      </div>
      <div className="gototop"></div>
    </div>
  );
};
