import React from "react";
import { hot } from "react-hot-loader";

import Home from "./sections/1-home";
import Sobre from "./sections/2-sobre";
import Palestrantes from "./sections/3-palestrantes";
import Programacao from "./sections/4-programacao";
import Parceiros from ".//sections/5-parceiros";
import Local from "./sections/6-local";
import Footer from "./sections/10-footer";

function App() {
  return (
    <div>
      <Home />
      <Sobre />
      <Palestrantes />
      <Programacao />
      <Parceiros />
      <Local />
      <Footer />
    </div>
  );
}

export default hot(module)(App);
