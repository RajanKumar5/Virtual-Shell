import React, { Component } from 'react';
import { MDBBtn, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import UserNavbar from './UserNavbar';
import { Card } from 'react-bootstrap'
import axios from 'axios';

class UserHomeCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            courses: []
        };
    }

    gotoCourse = (courseId) => {
        this.props.history.push("/task-page/" + courseId);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/courses")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    courses: data
                });
            });
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavbar history={this.props.history} />
                <div className="container">
                    <MDBRow className="mt-5 mb-5">
                        {this.state.courses.length === 0 ?
                            <MDBCol md="4" className="mb-4 mx-auto">
                                <Card style={{ width: '20rem' }} className="mb-5">
                                    <Card.Img variant="top" src="https://unsplash.com/a/img/empty-states/photos.png" width="250px" height="250px" />
                                    <MDBCardBody>
                                        <MDBCardTitle>Oops, No Course Available</MDBCardTitle>
                                        <MDBCardText>
                                            Try Again After Some Time
                                        </MDBCardText>
                                    </MDBCardBody>
                                </Card>
                            </MDBCol>

                            :
                            this.state.courses.map((course) => (
                                <MDBCol md="4" className="mb-4 mx-auto" key={course.courseId}>
                                    <Card style={{ width: '20rem' }} className="mb-5">
                                        <Card.Img variant="top" src={course.courseURL} width="250px" height="250px" />
                                        <MDBCardBody>
                                            <MDBCardTitle>{course.courseName}</MDBCardTitle>
                                            <MDBCardText>
                                                {course.courseDescription}
                                            </MDBCardText>
                                            <MDBBtn onClick={this.gotoCourse.bind(this, course.courseId)} color="blue lighten-2">GO</MDBBtn>
                                        </MDBCardBody>
                                    </Card>
                                </MDBCol>
                            ))
                        }

                    </MDBRow>
                </div>
            </div>
        );
    }
}

export default UserHomeCourses;

