import { Box, Modal } from "@mui/material";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editUserInfo } from "../../store/auth";

import "./EditAccount.scss";

class EditAccount extends Component {
  constructor(props) {
    super(props);
    const { username, firstName, lastName, email } = this.props.auth;
    this.state = {
      username,
      email,
      firstName,
      lastName,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editUserInfo(this.state);
    this.props.doneUpdating();
  }

  render() {
    const { username, email, firstName, lastName, password } = this.state;
    const { open, doneUpdating } = this.props;
    return (
      <Modal open={open} onClose={doneUpdating}>
        <Box sx={modalStyle}>
          <div className="edit-modal-body">
            <h2>Edit User Information</h2>
            <form onSubmit={this.handleSubmit} className="edit-modal-form">
              <div className="user-info">
                <div className="header-name">Username</div>
                <input value={username} name="username" onChange={this.handleChange} />
              </div>
              <div className="user-info">
                <div className="header-name">Email</div>
                <input value={email} name="email" onChange={this.handleChange} />
              </div>
              <div className="user-info">
                <div className="header-name">First Name </div>
                <input value={firstName} name="firstName" onChange={this.handleChange} />
              </div>
              <div className="user-info">
                <div className="header-name">Last Name</div>
                <input value={lastName} name="lastName" onChange={this.handleChange} />
              </div>
              <div className="back-button">
                <button type="button" onClick={this.props.doneUpdating}>Back</button>
              </div>
              <div>
                <button>Submit Changes</button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    );
  }
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  background: "#ffffff",
  transform: "translate(-50%, -50%)",
  minWidth: "40%",
  maxWidth: "80%",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUserInfo: function (user) {
      return dispatch(editUserInfo(user));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(EditAccount);
