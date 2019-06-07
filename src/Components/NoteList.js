import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "../App.css";

class NoteListComponent extends Component{
    constructor() {
        super();
        this.notes = 1;

        this.state = { // Component state object
            notes: [
                {title: "Important", content: "This is an important content!"},
                {title: "Note editor", content: "Note editor made with ReactJS..."},
            ]
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let items = this.state.notes.map((item, index) =>
            <li onClick={() => this.handleClick(index) } key={index} id={"Note_" + index}>{item.title}</li>);

        return(<div className="NoteComponent">
                <div className="NoteList">
                   <h3>{this.props.title}</h3>
                   <button onClick={() => this.handleAdd()}>Add note</button>
                   <hr />
                   {items}
                   <hr />
               </ div>
               <div className="NoteEditor">
                   <input type="text" id="NoteTitle" value={this.state.title} onChange={() => this.handleChange()} />
                   <textarea id="NoteContent" onChange={() => this.handleChange()} value={this.state.content}></textarea>
               </div>
             </div>);
    }

    handleAdd() {
        let list = this.state.notes;
        list.push({title: `Note ${this.notes}`, content: "Add some content..."});
        this.setState({notes: list});
        this.notes++;
    }

    handleClick(id) {
        console.log(`You clicked ${id}`);
        this.setState({id: id, content: this.state.notes[id].content, title: this.state.notes[id].title});
    }

    handleChange() {
        console.log("Changing")
        let title = document.getElementById("NoteTitle").value;
        let content = document.getElementById("NoteContent").value;
        let list = this.state.notes;
        list[this.state.id] = {title: title, content: content};
        this.setState({notes: list, content: content, title: title});
    }
}

export default hot(module)(NoteListComponent);
