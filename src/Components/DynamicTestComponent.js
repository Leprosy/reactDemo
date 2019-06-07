import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "../App.css";

class DynamicTestComponent extends Component{
    constructor() {
        super();
        this.state = { // Component state object
            clicks: 0,
            name: "Stranger"
        };

        // This binding is necessary to make `this` work in the callback
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        return(<div className="TestComponent">
                   <h3>This is a custom test component</h3>
                   <hr />
                   <p><strong>Click button handler test</strong></p>
                   <button onClick={() => this.handleClick() }>This button has been clicked {this.state.clicks} time(s)</button>
                   <hr />
                   <p><strong>Input change handler test</strong></p>
                   <p>Hello, {this.state.name}</p>
                   <input onChange={this.handleInput} placeholder="Enter your name" />
                   <hr />
               </div>);
    }

    handleInput(e) {
        if (e.nativeEvent.target.value.length >= 5) {
            this.setState({name: e.nativeEvent.target.value});
        } else {
            this.setState({name: "Stranger"});
        }
    }

    handleClick() {
        var clicks = this.state.clicks += 1;
        alert(`Clicked ${clicks} time(s)`);
        this.setState({clicks: clicks});
    }
}

export default hot(module)(DynamicTestComponent);
