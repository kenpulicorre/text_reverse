const axios = require("axios");

export const ACCION1 = "accion1";
export const ACCION2 = "accion2";
export const GET_QUERY = "getQuery";
export const GET_ALL = "getAll";
export const DELETE_ALL = "deleteAll";

let url = "http://localhost:3002";

export default function accion1() {}
export function accion2() {}
export function getQuery(payload) {
  console.log("----getQuery Ok!");

  return async function (dispatch) {
    try {
      const json = await axios.get(`${url}/texto?text=${payload} `);
      console.log("respuesta del back----", json.data);
      return dispatch({
        type: GET_QUERY,
        payload: json.data,
      });
    } catch (error) {
      alert("CAN'T REGISTER, CHECK TEXT!");
      console.log(error);
    }
  };
}
export function getAll(payload) {
  console.log("----getAll Ok!");

  return async function (dispatch) {
    try {
      const json = await axios.get(`${url}/textos`);
      console.log("respuesta del back getAll ----", json.data);
      return dispatch({
        type: GET_ALL,
        payload: json.data,
      });
    } catch (error) {
      alert("NO DATA IN DB");
      console.log(error);
    }
  };
}
export function deleteAll(payload) {
  console.log("----deleteAll Ok!");

  return async function (dispatch) {
    try {
      const json = await axios.delete(`${url}/borrar`);
      alert("DATA WAS CLEAR");
      console.log("respuesta del back getAll ----", json.data);
      return dispatch({
        type: DELETE_ALL,
        payload: json.data,
      });
    } catch (error) {
      alert("NO DATA IN DB");
      console.log(error);
    }
  };
}
