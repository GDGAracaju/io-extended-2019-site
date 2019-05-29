import React, { useState } from "react";
import { linkInscricao } from "../data";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", () => {
    setIsFixed(window.pageYOffset > window.innerHeight - 300)
  });
  return (
    <nav className={`navbar is-white ${isFixed && "is-fixed-top"}`} style={{background: "white", boxShadow: isFixed && '0 2px 4px 1px rgba(0,0,0,0.1)' }}>
      <div className="container">
        <div className="navbar-brand">
          <a href="#" className="navbar-item">
            <img src={require("../assets/images/gdg-aracaju.png")} alt="" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#inicio">
              Inicio
            </a>
            <a className="navbar-item" href="#sobre">
              Sobre
            </a>
            <a className="navbar-item" href="#palestrantes">
              Palestrantes
            </a>
            <a className="navbar-item" href="#programacao">
              Programação
            </a>
            <a className="navbar-item" href={linkInscricao} target="_blank">
              <div className="button is-primary">Inscreva-se!</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
