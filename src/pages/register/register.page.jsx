import React from "react";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Jumbotron, Container } from "react-bootstrap";

import axios from "axios";

import "./register.styles.css";

class RegisterPage extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      orgID: "",
      address: "",
      role: "",
      password: "",
      passwordConfirm: "",
      redirectToReferrer: false,

      orgs: []
    };
  }

  componentDidMount() {
    console.log("COMPONENT DID");
    fetch("http://127.0.0.1:3002/api/org/")
      .then(response => response.json())
      .then(orgs => {
        console.log(orgs);
        this.setState({ orgs: orgs.data });
      });
  }

  handleSubmit(event) {
    console.log(this.state, "...................");
    this.setState({ redirectToReferrer: true, loading: true });

    event.preventDefault();
    const {
      name,
      email,
      orgID,
      address,
      role,
      password,
      passwordConfirm
    } = this.state;

    axios
      .post("http://localhost:3002/api/user/signup", {
        name,
        email,
        orgID,
        address,
        role,
        password,
        passwordConfirm
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { orgs } = this.state;

    // if (redirectToReferrer === true) {
    //   return <Redirect to="/" />;
    // }
    return (
      <div className="signup">
        <div>
          <div>
            <Container>
              <h1 className="title">Create Form</h1>
              <Jumbotron className="FormJumbotran">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                      <h2>Employee Name</h2>
                    </Form.Label>
                    <Form.Control
                      className="Formcontrol"
                      type="text"
                      placeholder="Enter the name"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      <h2>Email</h2>
                    </Form.Label>
                    <Form.Control
                      className="Formcontrol"
                      type="email"
                      placeholder="Email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      <h2>Address</h2>
                    </Form.Label>
                    <Form.Control
                      className="Formcontrol"
                      type="text"
                      placeholder="Address"
                      onChange={e => this.setState({ address: e.target.value })}
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>
                      <h2>Orgnaisation</h2> ID
                    </Form.Label>
                    <Form.Control
                      as="select"
                      onChange={e => this.setState({ orgID: e.target.value })}
                      className="Formcontrol"
                    >
                      {orgs.map(el => (
                        <option key={el._id} value={el._id}>
                          {" "}
                          {el.name}{" "}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Label as="legend">
                    <h2> Role</h2>
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    label="admin"
                    name="role"
                    onChange={e => this.setState({ role: e.target.value })}
                    id="role1"
                    value="admin"
                  />
                  <Form.Check
                    onChange={e => this.setState({ role: e.target.value })}
                    type="radio"
                    label="user"
                    name="role"
                    id="role2"
                    value="user"
                  />

                  <Form.Group>
                    <Form.Label>
                      <h2>Password</h2>
                    </Form.Label>
                    <Form.Control
                      className="Formcontrol"
                      type="password"
                      placeholder="password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      <h2>PasswordConfirm</h2>
                    </Form.Label>
                    <Form.Control
                      className="Formcontrol"
                      type="password"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ passwordConfirm: e.target.value })
                      }
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                  <Button variant="primary" type="submit">
                    Submit
                    {/* {loading === true ? (
                    <Spinner animation="border" variant="info" />
                  ) : (
                    ""
                  )} */}
                  </Button>
                </Form>
              </Jumbotron>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
