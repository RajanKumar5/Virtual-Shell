import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ManageUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            users: []
        };
    }

    // API Call (Delete Product)
    deleteUser = (userId) => {
        var decision = window.confirm("Do you really want to delete this user?");
        if (decision) {
            axios.get("http://localhost:8080/users/delete/" + userId)
                .then(response => {
                    if (response.data !== null) {
                        // Removing deleted row from table
                        this.setState({
                            users: this.state.users.filter(user => user.email !== userId)
                        });
                    }
                });
        }
    };

    // API Call (Get All Products)
    componentDidMount() {
        localStorage.removeItem("updateUser");
        axios.get("http://localhost:8080/users")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    users: data
                });
            });
    }

    addUser = () => {
        this.props.history.push("/addUsers");
    }

    updateUser = (userId) => {
        localStorage.setItem("updateUser", userId);
        this.props.history.push("/updateUser");
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
                        <MDBCol md="12" className="mx-auto">
                            <MDBBtn className="mb-3" color="blue lighten-2 mx-auto" onClick={this.addUser}><FontAwesomeIcon icon={faUserPlus} /> ADD NEW USER</MDBBtn>
                            <div>
                                <MDBTable>
                                    <MDBTableHead color="primary-color" textWhite>
                                        <tr>
                                            <th>Email</th>
                                            <th>Full Name</th>
                                            <th>Role</th>
                                            <th></th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {this.state.users.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="3">No User Available</td>
                                            </tr> :
                                            this.state.users.map((user) => (
                                                <tr key={user.email}>
                                                    <td className="align-middle">{user.email}</td>
                                                    <td className="align-middle">{user.fullName}</td>
                                                    <td className="align-middle">{user.role}</td>
                                                    <td>
                                                        <MDBBtnGroup size="md" className="d-flex">
                                                            <MDBBtn color="primary" onClick={this.updateUser.bind(this, user.email)}> <FontAwesomeIcon icon={faEdit} /> Edit</MDBBtn>
                                                            <MDBBtn color="danger" onClick={this.deleteUser.bind(this, user.email)}><FontAwesomeIcon icon={faTrash} /> Delete</MDBBtn>
                                                        </MDBBtnGroup>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br/>
            </div>
        );
    }
}

export default ManageUsers;