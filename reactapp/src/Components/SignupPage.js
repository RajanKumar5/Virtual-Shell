import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import NavbarPage from './NavbarPage';
import axios from 'axios'

class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: ""
        };
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // API Call
    createUser = (event) => {
        const user = {
            email: this.state.email,
            fullName: this.state.fullName,
            password: this.state.password,
        }
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            alert("Please enter same password");
            return;
        }

        axios.post("http://localhost:8080/signup", user)
            .then(response => {
                if (response.data) {
                    alert("Account Created Successfully..");
                    this.setState({
                        email: "",
                        fullName: "",
                        password: "",
                        confirmPassword: ""
                    });
                }
                else {
                    alert("Account already exists with this email, please login!");
                }
            });
    }

    render() {

        const {
            email, fullName, password, confirmPassword
        } = this.state

        return (
            <div>
                <NavbarPage />
                <MDBContainer className="mb-5 mt-4">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.createUser}>
                                        <p className="h4 text-center py-4">SIGN-UP</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                name="fullName"
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.valueChange}
                                                value={fullName}
                                                required
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                name="email"
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                onChange={this.valueChange}
                                                value={email}
                                                required
                                            />
                                            <MDBInput
                                                label="Your password"
                                                icon="lock"
                                                name="password"
                                                group
                                                type="password"
                                                validate
                                                onChange={this.valueChange}
                                                value={password}
                                                required
                                            />
                                            <MDBInput
                                                label="Confirm password"
                                                icon="lock"
                                                name="confirmPassword"
                                                group
                                                type="password"
                                                validate
                                                onChange={this.valueChange}
                                                value={confirmPassword}
                                                required
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="cyan" type="submit">
                                                Register
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <br />
                </MDBContainer>
            </div>
        );
    }
}

export default SignupPage;