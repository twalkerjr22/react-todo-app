import React from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 250
  },
  centered: {
    textAlign: "center"
  }
};

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: props.taskName,
      taskDescription: props.taskDescription
    };
  }

  render() {
    return (
      <div>
        <Card style={styles.card}>
          <CardContent>
            <h2 style={styles.centered}>{this.state.taskName}</h2>
            <Typography component="p">{this.state.taskDescription}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ToDoItem;
