import React from "react";

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
    image:
      "https://git.dcomp.ufs.br/uploads/-/system/appearance/logo/1/LOGOTIPO_ORIGINAL_RETANGULAR.png",
    url: "http://computacao.ufs.br"
  },
  {
    image: "http://erbase.sbc.org.br/2018/img/logo_ufs.png",
    url: "http://ufs.br"
  },
  {
    image: "https://cio-se.org.br/wp-content/uploads/2018/05/logo.jpg",
    url: "https://cio-se.org.br/"
  },
  {
    image:
      "http://www.ifs.edu.br/comunicacao/images/Imagens/Marcas/IFS_puro/Marca_IFS_vertical-01.png",
    url: "http://www.ifs.edu.br"
  },
  
];

const apoiadores = [
  {
    image: "http://www.wtr.pop-se.rnp.br/wp-content/uploads/2017/09/LogoBK.jpg",
    url: "http://www.bktelecomunicacoes.com.br/"
  }
];

function Parceiros() {
  return (
    <section id="parceiros" className="home hero is-medium is-white">
      <div className="hero-body">
        <div className="container">
          {/* title */}
          <div className="columns">
            <div className="column is-full has-text-centered">
              <h1 className="title is-2 has-text-weight-light">Parceiros</h1>
              <div className="subtitle">Quem tornou este evento possível</div>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {parceiros.map(parceiro => (
              <a
                href={parceiro.url}
                target="_blank"
                rel="noopener noreferrer"
                className="column is-one-fifth has-text-centered"
              >
                <div
                  style={{
                    height: 100,
                    margin: "40px 20px",
                    background: `url(${parceiro.image}) center center / contain no-repeat`
                  }}
                />
              </a>
            ))}
          </div>

          {/* title */}
          <div className="columns">
            <div className="column is-full has-text-centered">
              <h1 className="title is-2 has-text-weight-light">Apoiadores</h1>
              <div className="subtitle">Quem contribuiu com recursos</div>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {apoiadores.map(parceiro => (
              <a
                href={parceiro.url}
                rel="noopener noreferrer"
                target="_blank"
                className="column  is-one-fifth has-text-centered"
              >
                <div
                  style={{
                    height: 100,
                    margin: "40px 20px",
                    background: `url(${parceiro.image}) center center / contain no-repeat`
                  }}
                />
              </a>
            ))}
          </div>

          {/*  */}


        </div>
      </div>
    </section>
  );
}

export default Parceiros;
