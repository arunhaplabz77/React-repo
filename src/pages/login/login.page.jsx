import React from "react";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

import { Redirect } from "react-router";
import Toast from "react-bootstrap/Toast";
import axios from "axios";

import "./login.styles.css";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
      isLoggedIn: false,
      errMsg: "",
      show: false
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ redirectToReferrer: true });
    axios
      .post("http://localhost:3002/api/user/login", {
        email,
        password
      })
      .then(response => {
        window.localStorage.setItem("token", response.data.token);

        this.setState({ isLoggedIn: true });
        console.log(response.data.token);
      })
      .catch(error => {
        this.setState({ errMsg: error, show: true });
        console.log(error);
      });
  }

  errorMsg(message, show) {
    if (!message) return null;

    return (
      <Toast
        onClose={() => this.setState({ show: false })}
        show={this.state.show}
        delay={3000}
        autohide
      >
        <Toast.Header>Authentication Error !!!</Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    );
  }

  render() {
    let logging = this.state.isLoggedIn;
    const { message } = this.state.errMsg;
    const { show } = this.state.show;

    if (logging === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="">
        {this.errorMsg(message, show)}
        <h1 className="title">Login Form</h1>

        <div>
          <div className="formdesign">
            <Jumbotron>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <h2>Email or Username</h2>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter the email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <h2>Password</h2>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
