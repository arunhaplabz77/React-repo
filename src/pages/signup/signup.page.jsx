import React from "react";
import { Redirect } from "react-router";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";

import "./signup.styles.css";

class SignupPage extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      address: "",
      redirectToReferrer: false,
      loading: false
    };
  }

  componentDidMount() {
    console.log("COMPONENT DID");
    fetch("http://127.0.0.1:3002/api/org/")
      .then(response => response.json())
      .then(organisations => {
        console.log(organisations);
        this.setState({ organisations: organisations.data });
      });
  }

  handleSubmit(event) {
    this.setState({ redirectToReferrer: true, loading: true });

    event.preventDefault();
    const { name, address } = this.state;

    axios
      .post("http://localhost:3002/api/org", {
        name,
        address
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { redirectToReferrer, loading } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup">
        <h1 className="title">Create Form</h1>

        <div>
          <div className="formdesign">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>
                  <h2>Organisation Name</h2>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the name"
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  <h2>Address</h2>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address of the company"
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
                {loading === true ? (
                  <Spinner animation="border" variant="info" />
                ) : (
                  ""
                )}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
