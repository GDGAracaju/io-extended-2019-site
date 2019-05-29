import React from "react";

import { palestrantes } from "../data";

const colors = {
  web: 'is-danger',
  ia: 'is-warning',
  android: 'is-success',
  iot: 'is-info'
};

function Palestrantes() {
  return (
    <section id="palestrantes" className="home hero is-fullheight is-white">
      <div className="hero-body">
        <div className="container">
          {/* title */}
          <div className="columns">
            <div className="column is-full">
              <h1 className="title is-2 has-text-weight-light">Palestrantes</h1>
              <div className="subtitle">Pessoas especiais que toparam trocar conhecimento</div>
            </div>
          </div>

          {/* items */}
          <div className="columns is-centered is-multiline">
            {palestrantes.map(pessoa => (
              <div className="column is-3 has-text-centered">
                <div style={{ padding: '20px 15px'}}>
                  <figure className="image is-1by1">
                    <img
                      src={pessoa.image || `https://i.pravatar.cc/300?img=${pessoa.id}`}
                      className="is-rounded"
                      alt=""
                    />
                  </figure>
                  <br />
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <p class="title is-4">{pessoa.nome}</p>
                      {/* <p class="subtitle is-6">@stone</p> */}
                      <p style={{ height: 150, overflowY: 'auto', paddingLeft: -15, paddingRight: -15 }}>{pessoa.bio}</p>
                    </div>
                  </div>
                  <br />
                  <div className="tags is-centered">
                    {pessoa.areas.map( area => (
                      <div className={`tag is-small ${colors[area]}`}>{area}</div>
                    ))}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Palestrantes;
