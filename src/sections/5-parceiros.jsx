import React from "react";

import { palestrantes } from "../data";

const colors = {
  web: 'is-danger',
  ia: 'is-warning',
  android: 'is-success',
  iot: 'is-info'
};

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
            {[1,2,3,4,5,6,7,8].map(pessoa => (
              <div className="column is-3 has-text-centered">
                <img src={`https://via.placeholder.com/300x150?text=Voce+Aqui+;)`} alt=""/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;
