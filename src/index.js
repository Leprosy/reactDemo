// Importing ReactJS libraries
import React from "react";
import ReactDOM from "react-dom";

// We import out components
import App from "./App.js";
//import StaticTestComponent from "./Components/StaticTestComponent.js";
//import DynamicTestComponent from "./Components/DynamicTestComponent.js";
import NoteListComponent from "./Components/NoteList";

// Render the components
ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render([<StaticTestComponent title="Static content with properties" />], document.getElementById("rootContent"));
//ReactDOM.render([<DynamicTestComponent />, <StaticTestComponent title="Static content with properties" />], document.getElementById("rootContent"));
ReactDOM.render([<NoteListComponent title="List of my notes" />], document.getElementById("rootContent"));
