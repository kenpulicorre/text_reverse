import React from "react";
import { Link } from "react-router-dom";
import estilos from "./LandingPage.module.css";

export default function LandingPage(params) {
  return (
    <div className={`container col-sm-12 ${estilos.landing}`}>
      <div class="row">
        <div class="col-sm-12">
          <div>
            <h1> Text Reverse, GO!</h1>
            <Link to="/home">
              <p></p>
              <button className={estilos.button}>INGRESAR</button>
              <p></p>
            </Link>{" "}
            <p></p>
            <p></p>
            <p></p>
            <h6>Creado por @kenpulicorre</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
