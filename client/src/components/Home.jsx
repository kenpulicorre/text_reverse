import React, { Fragment } from "react";
//hoooks
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import estilos from "./Home.module.css";
import Table from "react-bootstrap/Table";
//acciones
import { getAll, deleteAll } from "../actions/index.js";
import accion1 from "../actions/index";
import Button from "react-bootstrap/Button";
import git from "../access/git5.png";
import linkin from "../access/link.png";
import wpp from "../access/wpp5.png";
//componentes
import Form from "./Form";

//-----------------------------------------
var señal;
export default function Home(params) {
  //----hook iniciales---------
  const dispatch = useDispatch();
  const estados = useSelector((state) => state.textos);
  const textAll = useSelector((state) => state.textoAll);
  const textAll2 = textAll?.slice().reverse();
  const [currentState, setCurrentState] = useState(false);
  const [borra, setBorra] = useState("");
  //---ussefects----------------

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const setStado = (e) => {
    setCurrentState(e);
    dispatch(getAll());
  };
  useEffect(() => {
    if (textAll) {
      console.log(
        "---estado en home de estados ceroooooooo/",
        textAll[0]?.name,
        "reverse: ",
        textAll[0]?.nameReverse,
        "estados---"
      );
    }
  }, [currentState]);

  useEffect(() => {
    console.log("borro-----");
  }, [borra, dispatch]);
  //---fin ussefects---------------
  //----funciones-----------------

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteAll());
    dispatch(getAll());
    setBorra("borro");
  }
  //----fin funciones--------------

  return (
    <div className={` ${estilos.arreglo} ${estilos.mayor_cotainer}`}>
      <div className=" col-md-12">
        <div className={`row border border-danger ${estilos.abs_center}`}>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Form setStado={setStado} />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <br />
      <br />
      <div
        className={`container border border-primary  ${estilos.mayor_cotainer_result}`}
      >
        <div className={`row  `}>
          <div className={`row  col-md-12  ${estilos.centrar}`}>
            <div className="col-md-2">
              <h1>Results:</h1>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-2">
              <Button variant="danger" onClick={(e) => handleDelete(e)}>
                Delete All
              </Button>
            </div>
          </div>
          <div className="row  col-md-12">
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>TEXT</th>
                  <th>TEXT REVERSE</th>
                  <th>PALINDROME</th>
                </tr>
              </thead>
              <tbody>
                {textAll2?.map((e, i) => {
                  return (
                    <tr>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.nameReverse}</td>
                      <td>{e.palindrome ? "TRUE" : "FALSE"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="card border border-dark">
        <br />
        <div class="card-header"></div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              In order to change the text, you just have to enter the text in
              the section, and click on the "send" button
            </p>
          </blockquote>
        </div>
      </div>
      <div className={` border border-dark col-md-12 ${estilos.connect_me}`}>
        <div className="col-md-2">
          <div class="row">
            <div className={`col-sm-12 ${estilos.text_justificado}`}>
              <div
                className={`${estilos.overflow}`}
                // style="max-width: 250px; max-height: 150px; color:blue     overflow-auto"
              >
                Hello everybody, I am Kenneth Puliche C.! My desire for
                self-improvement and desire to learn led me down the path
                towards new technologies, now I have knowledge in full stack
                development, with which I would like to be part of a team to
                which I can contribute with my knowledge, and help each one of
                its members to grow up its Projects.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4 id="conect">Connect with Me! </h4>
          <div>
            <div className="row">
              <div className="col-sm-4  ">
                <a target="_blank" HREF="https://github.com/kenpulicorre ">
                  <img src={git} className="img-fluid" alt="no imagen" />
                  <h6>Github</h6>
                </a>
              </div>

              <div className="col-sm-4 ">
                <a
                  target="_blank"
                  HREF="https://www.linkedin.com/in/kenneth-puliche-correa-813311225/"
                >
                  <img src={linkin} className="img-fluid" alt="no imagen" />
                  <h6>LinkedIn</h6>
                </a>
              </div>
              <div className="col-sm-4 ">
                <a
                  target="_blank"
                  HREF="https://api.whatsapp.com/send?phone=573114035605"
                >
                  <img src={wpp} className="img-fluid" alt="no imagen" />
                  <h6>WhatsApp</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
