import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "typeface-roboto";

let data = require("./data");
ReactDOM.render(<App data={data} />, document.getElementById("root"));
