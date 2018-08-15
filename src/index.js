import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createMiddleware from "redux-saga";

import registerIcons from "./utils/iconlib";
import configureStore from "./store"; // eslint-disable-line import/default
import reducer from "./reducers";
import sagas from "./sagas";
import Routes from "./routes";

import "./css/index.css" 

const sagaMiddleware = createMiddleware();
const store = configureStore(reducer, sagaMiddleware);
sagaMiddleware.run(sagas);
registerIcons();

ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, document.getElementById("root"));
