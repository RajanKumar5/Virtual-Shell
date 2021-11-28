import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFolderPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ManageCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            courses: []
        };
    }

    // API Call (Delete Product)
    deleteCourse = (courseId) => {
        var decision = window.confirm("Do you really want to delete this course?");
        if (decision) {
            axios.get("http://localhost:8080/courses/delete/" + courseId)
                .then(response => {
                    if (response.data !== null) {
                        // Removing deleted row from table
                        this.setState({
                            courses: this.state.courses.filter(course => course.courseId !== courseId)
                        });
                    }
                });
        }
    };

    // API Call (Get All Products)
    componentDidMount() {
        axios.get("http://localhost:8080/courses")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    courses: data
                });
            });
    }

    addCourse = () => {
        this.props.history.push("/addCourse")
    }

    editCourse = (courseId) => {
        this.props.history.push("/editCourse/" + courseId)
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
                            <MDBBtn className="mb-3" color="blue lighten-2 mx-auto" onClick={this.addCourse}><FontAwesomeIcon icon={faFolderPlus} /> ADD NEW COURSES</MDBBtn>
                            <div>
                                <MDBTable>
                                    <MDBTableHead color="primary-color" textWhite>
                                        <tr>
                                            <th>Course ID</th>
                                            <th>Course Name</th>
                                            <th></th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {this.state.courses.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="3">No Courses Available</td>
                                            </tr> :
                                            this.state.courses.map((course) => (
                                                <tr key={course.courseId}>
                                                    <td className="align-middle">{course.courseId}</td>
                                                    <td className="align-middle">{course.courseName}</td>
                                                    <td>
                                                        <MDBBtnGroup size="md" className="d-flex">
                                                            <MDBBtn color="primary" onClick={this.editCourse.bind(this, course.courseId)}> <FontAwesomeIcon icon={faEdit} /> Edit</MDBBtn>
                                                            <MDBBtn color="danger" onClick={this.deleteCourse.bind(this, course.courseId)}><FontAwesomeIcon icon={faTrash} /> Delete</MDBBtn>
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

export default ManageCourses;