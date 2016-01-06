import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const app = React.createElement(App);
const element = document.getElementById("root");
console.log("element", element);
ReactDOM.render(app, element);
