import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminNav from './AdminNav';
import axios from 'axios';

class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            fullName: "",
            password: "",
            currentPassword: "",
            newPassword: "",
            role: ""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/users/" + this.state.email)
            .then(response => {
                this.setState({
                    email: this.state.email,
                    fullName: response.data.fullName,
                    password: response.data.password,
                    role: response.data.role
                });
            });

    }

    changePassword = (event) => {
        event.preventDefault();

        var md5 = require('md5');
        var encryptePassword = md5(this.state.currentPassword);

        if(encryptePassword !== this.state.password){
            alert("Invalid Current Password!");
            this.setState({
                currentPassword: "",
                newPassword: "",
            });
            this.props.history.push("/changePassword");
            return;
        }

        const user = {
            email: this.state.email,
            fullName: this.state.fullName,
            password: this.state.newPassword,
            role: this.state.role
        }

        axios.put("http://localhost:8080/editUser", user)
            .then(response => {
                if (response.data) {
                    alert("Password Changed Successfully!");
                    this.setState({
                        currentPassword: "",
                        newPassword: "",
                        password: this.state.newPassword
                    });
                    this.props.history.push("/admin");
                }
                else {
                    alert("Something Went Wrong!");
                    this.props.history.push("/changePassword");
                }
            });
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        const {
            currentPassword, newPassword
        } = this.state

        return (
            <div>
                <AdminNav history={this.props.history}/>
                <MDBContainer className="mb-5 mt-4">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.changePassword}>
                                        <p className="h4 text-center py-4">RESET PASSWORD</p>
                                        <div className="grey-text">

                                            <MDBInput
                                                label="Current Password"
                                                icon="lock"
                                                name="currentPassword"
                                                group
                                                type="password"
                                                validate
                                                onChange={this.valueChange}
                                                value={currentPassword}
                                                required
                                            />
                                            <MDBInput
                                                label="New password"
                                                icon="lock"
                                                name="newPassword"
                                                group
                                                type="password"
                                                validate
                                                onChange={this.valueChange}
                                                value={newPassword}
                                                required
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit">
                                                <FontAwesomeIcon icon={faExchangeAlt} /> Reset
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