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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis ullam aliquam debitis enim quaerat magni repudiandae ex repellendus, alias provident maiores dicta asperiores quo aspernatur similique sit? Ipsam, tempore!</p>
                <a href="#" className="button is-primary">Visite nossos proximo eventos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
