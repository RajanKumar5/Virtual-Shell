import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import NavbarPage from './NavbarPage';

class SignupPage extends Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <MDBContainer className="mb-5 mt-4">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form>
                                        <p className="h4 text-center py-4">SIGN-UP</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                            />
                                            <MDBInput
                                                label="Confirm password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
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