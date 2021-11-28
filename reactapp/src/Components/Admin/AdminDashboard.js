import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import './admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEdit, faExchangeAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'

class AdminDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email")
        };
    }

    showMessage = () => {
        alert("message pop-up");
    }

    manageCourses = () => {
        this.props.history.push("/manageCourses");
    }

    manageUsers = () => {
        this.props.history.push("/manageUsers");
    }

    changePassword = () => {
        this.props.history.push("/changePassword");
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <AdminNav history={this.props.history} />
                <MDBContainer className="mt-4 mb-5">
                    <MDBRow>
                        <MDBCol md="6" className="mb-4 mx-auto">
                            <MDBCard color="primary-color" text="white" className="text-center dashButton" onClick={this.manageCourses}>
                                <MDBCardBody>
                                    <strong><p className="adminText"><FontAwesomeIcon icon={faBook} /> MANAGE COURSES</p></strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="6" className="mb-4 mx-auto">
                            <MDBCard color="primary-color" text="white" className="text-center dashButton" onClick={this.manageUsers}>
                                <MDBCardBody>
                                    <strong><p className="adminText"><FontAwesomeIcon icon={faUserEdit} /> MANAGE USERS</p></strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="6" className="mb-4 mx-auto">
                            <MDBCard color="primary-color" text="white" className="text-center dashButton">
                                <MDBCardBody>
                                    <strong><p className="adminText" onClick={this.changePassword}><FontAwesomeIcon icon={faExchangeAlt} /> CHANGE PASSWORD</p></strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
            </div>
        );
    }
}

export default AdminDashboard;