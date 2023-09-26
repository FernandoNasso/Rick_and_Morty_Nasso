import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

import thunkMiddleware from "redux-thunk";
// Permite utilizar "REACT-REDUX":
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea sirve para conectar nuestra App con la extensión REDUX DEVTOOLS DEL NAVEGADOR

const store = createStore(
	reducer,
	// Permite hacer peticiones asíncronas:
	composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store; 