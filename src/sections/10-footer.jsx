import React from "react";

import { links } from '../data'

function Footer(params) {
  return (
    <footer class="footer">
      <div className="container">
        <div class="content">
          <div className="columns is-vcentered">
            {/* esquerda */}
            <div className="column">
              <div className="columns is-multiline">
                <div className="column is-full">
                  <img src={require("../assets/images/gdg-aracaju.png")} width={250} alt="" />
                </div>
              </div>
            </div>

            {/* direita */}

            <div className="column has-text-right">
              <div className="columns is-pulled-right">
                <div className="column is-narrow">
                  <a  href={links.meetup} className="button is-text is-outlined" rel="noopener noreferrer" target="_blank">
                    Meetup
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href={links.medium} className="button is-text is-outlined" rel="noopener noreferrer" target="_blank">
                    Medium
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href={links.facebook} className="button is-text is-outlined" rel="noopener noreferrer" target="_blank">
                    Facebook
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href={links.instagram} className="button is-text is-outlined" rel="noopener noreferrer" target="_blank">
                    Instagram
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href={links.telegram} className="button is-text is-outlined" rel="noopener noreferrer" target="_blank">
                    Telegram
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href={links.whatsapp} className="button is-text is-outlined is-success" rel="noopener noreferrer" target="_blank">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
