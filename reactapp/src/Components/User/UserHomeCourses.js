import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import UserNavbar from './UserNavbar';
import { Card } from 'react-bootstrap'

class UserHomeCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email")
        };
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

                        <MDBCol md="4" className="mb-4">
                            <Card style={{ width: '20rem' }} className="mb-5">
                                <Card.Img variant="top" src="https://i.ytimg.com/vi/5RyjP6bsEmc/maxresdefault.jpg" width="250px" height="250px" />
                                <MDBCardBody>
                                    <MDBCardTitle>RHCSA</MDBCardTitle>
                                    <MDBCardText>
                                        RHCSA Description
                                    </MDBCardText>
                                    <MDBBtn href="/usercoursepage" color="blue lighten-2">GO</MDBBtn>
                                </MDBCardBody>
                            </Card>
                        </MDBCol>

                        <MDBCol md="4" className="mb-4">
                            <Card style={{ width: '20rem' }} className="mb-5">
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXTUWNnndAC0QWRPbaJpHikXQFecCqA4Pig&usqp=CAU" width="250px" height="250px" />
                                <MDBCardBody>
                                    <MDBCardTitle>RHCE</MDBCardTitle>
                                    <MDBCardText>
                                        RHCE Description
                                    </MDBCardText>
                                    <MDBBtn href="#?" color="blue lighten-2">GO</MDBBtn>
                                </MDBCardBody>
                            </Card>
                        </MDBCol>

                        <MDBCol md="4" className="mb-4">
                            <Card style={{ width: '20rem' }} className="mb-5">
                                <Card.Img variant="top" src="http://2.bp.blogspot.com/-d2g-U4sJp2o/TWyrtXJewlI/AAAAAAAAAJg/hZySJJCnyHE/s1600/rhcsa_logo.jpg" width="250px" height="250px" />
                                <MDBCardBody>
                                    <MDBCardTitle>Course 3</MDBCardTitle>
                                    <MDBCardText>
                                        Course Description
                                    </MDBCardText>
                                    <MDBBtn href="#?" color="blue lighten-2">GO</MDBBtn>
                                </MDBCardBody>
                            </Card>
                        </MDBCol>

                        <MDBCol md="4" className="mb-4">
                            <Card style={{ width: '20rem' }} className="mb-5">
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPZg5D08bXlJFD7kIFVlT-s02NAEu13tCPQ&usqp=CAU" width="250px" height="250px" />
                                <MDBCardBody>
                                    <MDBCardTitle>Course 4</MDBCardTitle>
                                    <MDBCardText>
                                        Course Description
                                    </MDBCardText>
                                    <MDBBtn href="#?" color="blue lighten-2">GO</MDBBtn>
                                </MDBCardBody>
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    }
}

export default UserHomeCourses;

