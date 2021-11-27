import React, { Component, Fragment } from 'react'
import { MDBTypography } from 'mdbreact';
import NavbarPage from '../NavbarPage';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


class ChangePassword extends Component {
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
                                        <p className="h4 text-center py-4">RESET PASSWORD</p>
                                        <div className="grey-text">
                                           
                                            <MDBInput
                                                label="current password"
                                                icon="lock"
                                                name="currentpassword"
                                                group
                                                type="password"
                                                validate
                                                // value={currentpassword}
                                                required
                                            />
                                            <MDBInput
                                                label="new password"
                                                icon="lock"
                                                name="newPassword"
                                                group
                                                type="password"
                                                validate
                                                // value={newPassword}
                                                required
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit">
                                                Reset
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



export default ChangePassword;