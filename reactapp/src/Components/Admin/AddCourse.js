import { faFolderPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import AdminNav from './AdminNav';

class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            courseName: "",
            courseDescription: "",
            courseURL: ""
        };
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // API Call
    saveCourse = (event) =>{
        const course = {
            courseName: this.state.courseName,
            courseDescription: this.state.courseDescription,
            courseURL: this.state.courseURL
        }
        event.preventDefault();

        axios.post("http://localhost:8080/createCourse", course)
        .then(response =>{
            if (response.data) {
                alert("Course Added Successfully!");
                this.setState({
                    courseName: "",
                    courseDescription: "",
                    courseURL: ""
                });
            }
            else {
                alert("Something Went Wrong!");
            }
        });
    }


    render() {

        const {
            courseName, courseDescription, courseURL
        } = this.state
        
        return (
            <div>
                <AdminNav history={this.props.history} />
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.saveCourse}>
                                        <p className="h4 text-center py-4">ADD NEW COURSE</p>
                                        <div className="grey-text">
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
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit">
                                                <FontAwesomeIcon icon={faFolderPlus} /> Add
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

export default AddCourse;