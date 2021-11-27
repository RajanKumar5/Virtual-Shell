import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import NavbarPage from './NavbarPage';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'


class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  valueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // API Call
  authenticateUser = (event) => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    event.preventDefault();
    axios.post("http://localhost:8080/login", user)
      .then(response => {
        if (response.data) {
          axios.post("http://localhost:8080/adminLogin", user)
            .then(response => {
              if (response.data) {
                localStorage.setItem("email", this.state.email);
                this.props.history.push("/admin");
                this.setState({
                  email: "",
                  password: "",
                });
              }
              else {
                localStorage.setItem("email", this.state.email);
                this.props.history.push("/userhomecourses");
                this.setState({
                  email: "",
                  password: "",
                });
              }
            });
        }
        else {
          alert("Invalid username or password..");
        }
      });
  }

  render() {
    const {
      email, password
    } = this.state

    return (
      <div>
        <NavbarPage />

        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol md="6" className="mx-auto">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.authenticateUser}>
                    <p className="h4 text-center py-4">LOGIN</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        name="email"
                        value={email}
                        onChange={this.valueChange}
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        required
                      />
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        name="password"
                        value={password}
                        onChange={this.valueChange}
                        type="password"
                        validate
                        required
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="blue lighten-2" type="submit">
                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default LoginPage;
