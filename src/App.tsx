import React from "react";
import { Card } from "./components/Card";
import "./GlobalStyles.css";
import "./Home.css";

function App() {
  return (
    <div className="container">
      <img src="../images/github.svg" alt="" className="img-github" />
      <header>
        <img src="./images/logo-completa.png" alt="" />
        <h1 className="title">Explore repositórios no Github.</h1>

        <div className="search">
          <input type="text" placeholder="Digite aqui" />
          <button>Pesquisar</button>
        </div>
      </header>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
