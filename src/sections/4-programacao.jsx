import React, { useState } from "react";

import { programacao } from "../data";

function Palestrantes() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', ()=> setWidth(window.innerWidth) )
  return (
    <section className="home hero is-fullheight is-white">
      <div className="hero-body">
        <div className="container">
          {/* title */}
          <div className="columns">
            <div className="column is-full has-text-centered">
              <h1 className="title is-2 has-text-weight-light">Programação</h1>
              <div className="subtitle">O que vai rolar</div>
            </div>
          </div>

          {/* items */}
          <div className="columns is-multiline">
            <div className="column is-centered">
              <div class={`timeline ${width > 900 && 'is-centered'}`}>
                {programacao.map(p =>
                  p.break ? (
                    <header class="timeline-header" style={{ padding: '0 50px'}}>
                      <span class="tag is-medium is-rounded is-primary">
                        {p.titulo} {p.horario}
                      </span>
                    </header>
                  ) : (
                    <div class="timeline-item" style={{ height: 'auto'}}>
                      <div class="timeline-marker is-image is-64x64">
                        <img src={p.palestrante.image} />
                      </div>
                      <div class="timeline-content" style={{ padding: '1em 3em'}}>
                        <p class="heading">{p.horario}</p>
                        <b>{p.titulo}</b>
                        <p>{p.resumo}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Palestrantes;
