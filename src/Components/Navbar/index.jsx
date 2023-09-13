import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

export const Navbar = ({ theme }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenu = () => {
    if (isMenuVisible === false) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
  };
  const closeMenu = () => {
    setMenuVisible(false);
  };
  return (
    <div id="navbar" className="navbar_container">
      <a href="">
        <img className="logo" src="../images/logo-sun.png" alt="" />
      </a>

      <div className={isMenuVisible ? "links_navbar visible" : "links_navbar"}>
        <button onClick={handleMenu} className="media_menu_close">
          <img src="../images/xmoon.png" alt="" />
        </button>
        <Link
          onClick={closeMenu}
          to="inicio"
          spy={true}
          smooth={true}
          offset={-280}
          duration={350}
        >
          Inicio
        </Link>
        {/* <Link
          onClick={closeMenu}
          to="tec"
          spy={true}
          smooth={true}
          offset={-120}
          duration={350}
        >
          Cursos
        </Link> */}
        <Link
          onClick={closeMenu}
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-190}
          duration={350}
        >
          Cursos
        </Link>
        <Link
          onClick={closeMenu}
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-190}
          duration={350}
        >
          Sobre Mi
        </Link>
        <Link
          onClick={closeMenu}
          to="contacto"
          spy={true}
          smooth={true}
          offset={-170}
          duration={350}
        >
          Contacto
        </Link>
      </div>
      <div className={isMenuVisible ? "media_menu visible" : "media_menu"}>
        <button onClick={handleMenu}>
          <img src={`../images/menu${theme}.png`} alt="" />
        </button>
      </div>
    </div>
  );
};
