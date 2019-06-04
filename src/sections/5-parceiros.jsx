import React from "react";

const realizadores = [
  {
    image: require("../assets/images/gdg-aracaju.png"),
    url: "http://gdgaracaju.com.br"
  },
  {
    image: require("../assets/images/google.webp"),
    url: "http://google.com/developers"
  }
];

const correalizadores = [
  {
    image: require("../assets/images/parceiros/sergipetec300x140.png"),
    url: "http://sergipetec.org.br/"
  }
];

const parceiros = [
  {
    image: require("../assets/images/parceiros/logo-1.png"),
    url: "http://unit.br"
  },
  {
    image: require("../assets/images/parceiros/logo-fanese-126x134.png"),
    url: "http://fanese.edu.br"
  },
  {
    image: require("../assets/images/parceiros/logo-estacio-horizontal.png"),
    url: "http://portal.estacio.br/"
  },
  {
    image: require("../assets/images/parceiros/logo-small.png"),
    url: "https://www.uninassau.edu.br/"
  },
  {
    image: require("../assets/images/parceiros/LOGOTIPO_ORIGINAL_RETANGULAR.png"),
    url: "http://computacao.ufs.br"
  },
  {
    image: require("../assets/images/parceiros/logo_ufs.png"),
    url: "http://ufs.br"
  },
  {
    image: require("../assets/images/parceiros/logo.jpg"),
    url: "https://cio-se.org.br/"
  },
  {
    image: require("../assets/images/parceiros/Marca_IFS_vertical-01.png"),
    url: "http://www.ifs.edu.br"
  }
];

const apoiadores = [
  {
    image: require("../assets/images/parceiros/LogoBK.jpg"),
    url: "http://www.bktelecomunicacoes.com.br/"
  },
  {
    image: require("../assets/images/chip.jpeg"),
    url: "https://chipcia.com.br/"
  },
  {
    image: require("../assets/images/getinfo.png"),
    url: "https://www.getinfo.net.br/"
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
              <h1 className="title is-3 has-text-weight-light">Realização</h1>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {realizadores.map(parceiro => (
              <a
                href={parceiro.url}
                target="_blank"
                rel="noopener noreferrer"
                className="column is-4 has-text-centered"
              >
                <div
                  style={{
                    height: 150,
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
              <h1 className="title is-3 has-text-weight-light">Correalização</h1>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {correalizadores.map(parceiro => (
              <a
                href={parceiro.url}
                target="_blank"
                rel="noopener noreferrer"
                className="column is-4 has-text-centered"
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
