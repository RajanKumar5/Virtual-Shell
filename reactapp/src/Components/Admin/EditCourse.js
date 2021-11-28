import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import AdminNav from './AdminNav';
import axios from 'axios';

class EditCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: "",
            courseName: "",
            courseDescription: "",
            courseURL: "",
            bookURL: "",
            terminalURL: ""
        };
    }

    // API Call
    componentDidMount() {
        const courseId = +this.props.match.params.courseId;
        if (courseId) {
            axios.get("http://localhost:8080/courses/" + courseId)
                .then(response => {
                    this.setState({
                        courseId: response.data.courseId,
                        courseName: response.data.courseName,
                        courseDescription: response.data.courseDescription,
                        courseURL: response.data.courseURL,
                        bookURL: response.data.bookURL,
                        terminalURL: response.data.terminalURL
                    });
                });
        }
    }

    // API Call (Update Course Details)
    updateCourse = (event) => {
        event.preventDefault();

        const course = {
            courseId: this.state.courseId,
            courseName: this.state.courseName,
            courseDescription: this.state.courseDescription,
            courseURL: this.state.courseURL,
            bookURL: this.state.bookURL,
            terminalURL: this.state.terminalURL
        }
        axios.put("http://localhost:8080/editCourse", course)
            .then(response => {
                if (response.data) {
                    alert("Course updated successfully!");
                    this.props.history.push("/manageCourses");
                }
                else{
                    alert("Something Went Wrong!");
                }
            });
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {

        const { courseId, courseName, courseDescription, courseURL, bookURL, terminalURL } = this.state;


        return (
            <div>
                <AdminNav history={this.props.history} />
                <MDBContainer className="mt-5 mb-5">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.authenticateUser}>
                                        <p className="h4 text-center py-4">UPDATE COURSE</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Course ID"
                                                group
                                                name="courseId"
                                                type="text"
                                                validate
                                                required
                                                disabled
                                                onChange={this.valueChange}
                                                value={courseId}
                                            />
                                            <MDBInput
                                                label="Course Name"
                                                group
                                                name="courseName"
                                                type="text"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={courseName}
                                            />
                                            <MDBInput
                                                label="Course Description"
                                                group
                                                name="courseDescription"
                                                type="textarea"
                                                rows="1"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={courseDescription}
                                            />
                                            <MDBInput
                                                label="Image URL"
                                                group
                                                name="courseURL"
                                                type="text"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={courseURL}
                                            />
                                            <MDBInput
                                                label="Book URL"
                                                group
                                                name="bookURL"
                                                type="text"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={bookURL}
                                            />
                                            <MDBInput
                                                label="Terminal URL"
                                                group
                                                name="terminalURL"
                                                type="text"
                                                validate
                                                required
                                                onChange={this.valueChange}
                                                value={terminalURL}
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit" onClick={this.updateCourse}>
                                                <FontAwesomeIcon icon={faEdit} /> UPDATE
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

export default EditCourse;