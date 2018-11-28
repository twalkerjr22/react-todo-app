import React from "react";
import ReactDOM from "react-dom";
import ToDoContainer from "../components/ToDo/TodoContainer.jsx";
import "../styles.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToDoItem from "../components/ToDo/TodoItem.jsx";

// CSS Styling
const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 30
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  headerMargin: {
    marginTop: 100
  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], title: "", description: "" };

    this.newTask = this.newTask.bind(this);
  }

  newTask(props) {
    let arr = this.state.tasks;
    arr.push({ id: 2, title: "Test", description: "Test" });
    this.setState({ tasks: arr });
  }

  render() {
    return (
      <div>
        <Header newTask={this.newTask} />
        <div>
          {this.state.tasks.length > 0 && <Item tasks={this.state.tasks} />}
        </div>
      </div>
    );
  }
}

// Modern syntax >= React 16.2.0
const Item = props => {
  return props.tasks.map(p => (
    <ToDoItem key={p.title} title={p.title} description={p.description} />
  ));
};

const Header = props => {
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            style={styles.menuButton}
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            React Todo App
          </Typography>
          <Button color="inherit" onClick={props.newTask}>
            Add New Task
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashboard;
