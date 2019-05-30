import React from "react";

import Navbar from './0-navbar';
import { linkInscricao } from "../data";

function Home() {
  return (
    <section id="home" className="home hero is-fullheight is-white">
      <div className="hero-head" style={{padding: '30px 0'}}>
        <Navbar></Navbar>
      </div>
      <div className="hero-body">
        <div className="container">
          <img src="https://storage.googleapis.com/io-19-assets/images/global/hashtag.gif" width={340} alt=""/>
          <h1 className="title has-text-weight-light">Google IO Extended Aracaju '19</h1>
          <h4 className="subtitle has-text-weight-light">15 de junho no SergipeTec</h4>
          <a rel="noopener noreferrer" href={linkInscricao} target="_blank" className="button is-medium">Inscreva-se!</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
