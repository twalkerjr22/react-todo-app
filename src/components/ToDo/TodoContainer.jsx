import React from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import ToDoItem from "./TodoItem.jsx";

class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ToDoItem taskName="Homework" />
      </div>
    );
  }
}

export default ToDoContainer;
