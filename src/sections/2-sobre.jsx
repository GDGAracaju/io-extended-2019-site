import React from "react";

import Navbar from "./0-navbar";

function Sobre() {
  return (
    <section id="sobre" className="home hero is-medium is-white">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column has-text-right">
            <img src={require("../assets/images/io-logo.png")} width="200" alt="" />

            </div>
            <div className="column">
              <div className="h1 title is-3 has-text-weight-light">Sobre o Google IO Extended</div>
              <div className="content">
                <p>O Google I/O é um evento anual realizado pelo Google para anunciar suas novidades para o mundo. Este ano o evento aconteceu em Maio na Califórnia. Mas, para que todos possam tenham acesso um pouco deste evento, ao redor do mundo são realizadas as versões Extendeds. Em Sergipe ocorrerá no dia 15 de Junho no auditório do Sergipe Parque Tecnológico (SergipeTec) onde serão ministradas palestras por GDEs (Google Developers Experts) e por profissionais de Sergipe com sorteio de brindes. O evento é gratuito e além de ser um momento de agregar conhecimento na área de tecnologias do Google, promoverá momentos de interação entre estudantes e profissionais da área de TI.</p>
                <a href="#" className="button is-primary">Visite nossos próximos eventos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
