import React from "react";
import ReactDOM from "react-dom";
import Application from "./Components/Application.react";
import Backend from "./backend.js"
var backend = new Backend();

ReactDOM.render(
  <Application title='Todo Manager' backend={backend}/>,document.querySelector('.react')
);
