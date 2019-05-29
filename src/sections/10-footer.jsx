import React from "react";

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
                  <a href="" className="button is-text is-outlined">
                    Meetup
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href="" className="button is-text is-outlined">
                    Facebook
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href="" className="button is-text is-outlined">
                    Telegram
                  </a>
                </div>
                <div className="column is-narrow">
                  <a href="" className="button is-text is-outlined is-success">
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
