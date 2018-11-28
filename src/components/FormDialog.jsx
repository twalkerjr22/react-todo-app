import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      title: "",
      description: ""
    };

    this.handleClickOpen = () => {
      this.setState({ open: true });
    };

    this.handleClose = () => {
      this.setState({ open: false });
    };

    this.handleDescription = event => {
      this.props.handleDescription(event.target.value);
    };

    this.handleTitle = event => {
      this.props.handleTitle(event.target.value);
    };

    this.handleTitleChange = () => {};
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Edit Task</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.handleTitle}
              margin="dense"
              id="name"
              label="Title"
            />
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              onChange={this.handleDescription}
              margin="dense"
              id="description"
              label="Description"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add Task
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
