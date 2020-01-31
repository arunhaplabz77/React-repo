import React from "react";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";

import {Redirect} from "react-router";

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
      isLoggedIn: false
    };
  }
  handleSubmit(event) {
    this.setState({ redirectToReferrer: true, isLoggedIn:true});

    event.preventDefault();
    const { email, password } = this.state;

    axios
      .post("http://localhost:3002/api/user/login", {
        email,
        password
      })
      .then(function(response) {
        console.log(response)
       localStorage.setItem('token', response.data)
       
      })
      .catch(function(error) {

         window.alert(error);
      
      });
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="">
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
