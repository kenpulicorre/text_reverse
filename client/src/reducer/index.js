import { ACCION1, GET_QUERY, GET_ALL, DELETE_ALL } from "../actions/index.js";

const initialState = {
  textosAll: [],
  textos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUERY:
      return { ...state, textos: state.textos.concat(action.payload) };

    case GET_ALL:
      return { ...state, textoAll: action.payload };
    case DELETE_ALL:
      return { ...state };

    default:
      return state;
  }
}
export default rootReducer;
