import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import estilos from "./Form.module.css";
//acciones
import { getQuery, getAll } from "../actions/index.js";

//componentes
// import SearchBar from "./SearchBar";

//-----------------------------------------
export default function Form({ setStado }) {
  const dispatch = useDispatch();
  //---globalsate-----

  const textAll = useSelector((state) => state.textoAll);

  //---local state----
  const [input, setInput] = useState({ texto: "" });
  //----usefect

  //----finusefect

  //--------------handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getQuery(input.texto));
    dispatch(getAll());
    setStado(true);
    setInput({ ...input, texto: "" });
  }
  //-------------fin handleSubmit
  //--------------handleOnChange
  function handleOnChange(e) {
    setStado(false);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  //--------------fin handleOnChange

  //-------------handleValidacion

  //-------------fin handleValidacion

  //-------------handleDelete

  //-------------Fin handleDelete

  //---- fin de logica----
  return (
    <form
      onSubmit={(e) => {
        return handleSubmit(e);
      }}
    >
      <br />
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={input.texto}
            name="texto"
            placeholder="Insert text!"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Send
        </button>
      </div>
    </form>
  );
}

// <input
//   type="text"
//   placeholder="."
//   onChange={(e) => handleInputOnChange(e)}
// />;
