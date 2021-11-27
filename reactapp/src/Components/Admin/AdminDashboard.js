import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import './admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEdit, faExchangeAlt, faFolderPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons'

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

    addCourse = () =>{
        this.props.history.push("/addCourse")
    } 

    addTask = () =>{
        this.props.history.push("/addTask")
    }

    editCourse = () =>{
        this.props.history.push("/editCourse")
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
                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton" onClick={this.addCourse}>
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faBook} /> ADD NEW COURSE</strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton" onClick={this.addTask}>
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faFolderPlus} /> ADD NEW TASK</strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton" onClick={this.editCourse}>
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faEdit} /> EDIT COURSE</strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton">
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faEdit} /> EDIT TASK</strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton">
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faUserEdit} /> MANAGE USERS</strong>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol md="6" className="mb-4">
                            <MDBCard color="info-color" text="white" className="text-center dashButton">
                                <MDBCardBody>
                                    <strong><FontAwesomeIcon icon={faExchangeAlt} /> CHANGE PASSWORD</strong>
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