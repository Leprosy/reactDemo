import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "../App.css";

class StaticTestComponent extends Component{
    render() {
        return(<div className="TestComponent">
                   <h3>This is another custom test component with static content</h3>
                   <p><strong>Title = {this.props.title}</strong></p>
                   <hr />
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                   non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   <hr />
               </div>);
    }
}

export default hot(module)(StaticTestComponent);
