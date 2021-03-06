import React from "react";

function Local() {
  return (
    <section id="local" className="home hero is-medium is-dark">
      <div className="hero-header">
        {/* title */}
        <div className="container">
          <div className="columns">
            <div
              className="column is-full has-text-left"
              style={{ paddingTop: 60 }}
            >
              <h1 className="title is-2 has-text-weight-light">
                Onde vai ser?
              </h1>
              <div className="subtitle">O que vai rolar</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="container">
          {/* items */}
          <div className="columns is-multiline">
            <div className="column is-centered">
              <a
                rel="noopener noreferrer"
                href="https://goo.gl/maps/gp1VkZ3xACD7RHeeA"
                target="_blank"
                className="box"
              >
                <div className="content">
                  <b className="has-text-primary">
                    Unit - Universidade Tiradentes
                  </b>{" "}
                  <br />
                  Av. Murilo Dantas, 300
                  <br />
                  Farolândia, Aracaju - SE
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Local;
