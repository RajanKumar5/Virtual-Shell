import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import NavbarPage from './NavbarPage';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavbarPage />

        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol md="6" className="mx-auto">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">LOGIN</p>
                    <div className="grey-text">
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
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn href="/userhomecourses" color="cyan" type="submit">
                        Login
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