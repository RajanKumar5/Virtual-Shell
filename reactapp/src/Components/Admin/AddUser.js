import { faFolderPlus, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import AdminNav from './AdminNav';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            userEmail: "",
            fullName: "",
            password: "",
            role: "",
        };
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // API Call
    addUser = (event) => {
        const userRole = document.getElementById("role").value;
        const user = {
            email: this.state.userEmail,
            fullName: this.state.fullName,
            password: this.state.password,
            role: userRole
        }
        event.preventDefault();

        axios.post("http://localhost:8080/signup", user)
            .then(response => {
                if (response.data) {
                    alert("User Added Successfully!");
                    this.setState({
                        userEmail: "",
                        fullName: "",
                        password: "",
                        role: "",
                    });
                    this.props.history.push("/manageUsers");
                }
                else {
                    alert("Something Went Wrong!");
                }
            });
    }


    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        const {
            userEmail, fullName, password
        } = this.state

        return (
            <div>
                <AdminNav history={this.props.history} />
                <MDBContainer className="mt-4 mb-5">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.addUser}>
                                        <p className="h4 text-center py-4">ADD NEW USER</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Email"
                                                group
                                                name="userEmail"
                                                type="email"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={userEmail}
                                            />
                                            <MDBInput
                                                label="Full Name"
                                                group
                                                name="fullName"
                                                type="text"
                                                rows="1"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={fullName}
                                            />
                                            <MDBInput
                                                label="Password"
                                                group
                                                name="password"
                                                type="password"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={password}
                                            />
                                            <p>Role:</p>
                                            <select className="browser-default custom-select" id="role">
                                                <option value="user">user</option>
                                                <option value="admin">admin</option>
                                            </select>
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit">
                                                <FontAwesomeIcon icon={faUserPlus} /> Add
                                            </MDBBtn>
                                        </div>
                                    </form>
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

export default AddUser;