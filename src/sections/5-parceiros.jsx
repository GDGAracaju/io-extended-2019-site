import React from "react";

import { palestrantes } from "../data";

const parceiros = [
  {
    image: "http://sergipetec.org.br/wp-content/uploads/2016/04/sergipetec300x140.png",
    url: "http://sergipetec.org.br/"
  },
  {
    image: "https://vestibular.unit.br/se/wp-content/uploads/2018/04/logo-1.png",
    url: "http://unit.br"
  },
  {
    image: "http://processoseletivo.fanese.edu.br/assets/images/logo-fanese-126x134.png",
    url: "http://fanese.edu.br"
  },
  {
    image: "http://portal.estacio.br/img/logo-estacio-horizontal.png",
    url: "http://portal.estacio.br/"
  },
  {
    image: "https://www.uninassau.edu.br/landpages/nassau/img/layout/logo-small.png",
    url: "https://www.uninassau.edu.br/"
  },
  {
    image: "https://git.dcomp.ufs.br/uploads/-/system/appearance/logo/1/LOGOTIPO_ORIGINAL_RETANGULAR.png",
    url: "http://computacao.ufs.br"
  }
];

function Parceiros() {
  return (
    <section id="parceiros" className="home hero is-medium is-white">
      <div className="hero-body">
        <div className="container">
          {/* title */}
          <div className="columns">
            <div className="column is-full has-text-right">
              <h1 className="title is-2 has-text-weight-light">Parceiros</h1>
              <div className="subtitle">Quem tornou este evento possivel</div>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {parceiros.map(parceiro => (
              <a href={parceiro.url} target="_blank" rel="noref" className="column is-3 has-text-centered">
                <div style={{ height: 100, margin: '40px 20px', background: `url(${parceiro.image}) center center / contain no-repeat`  }}></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
