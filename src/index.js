import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import catsReducer from "./features/cats/catsSlice.js";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(catsReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
