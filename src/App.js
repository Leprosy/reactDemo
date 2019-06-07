import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
    render(){
        return(<div className="App">
                   <h1>React Test <small>aka Goodbye World</small></h1>
                   <div id="rootContent"></div>
               </div>);
    }
}

export default hot(module)(App);
