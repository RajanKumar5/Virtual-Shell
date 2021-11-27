import { faEdit, faFolderPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import AdminNav from './AdminNav';

class EditCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    render() {
        
        return (
            <div>
                <AdminNav history={this.props.history} />
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="6" className="mx-auto">
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.authenticateUser}>
                                        <p className="h4 text-center py-4">UPDATE COURSE</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Course Name"
                                                group
                                                name="name"
                                                type="text"
                                                validate
                                                required
                                            />
                                            <MDBInput
                                                label="Course Description"
                                                group
                                                name="description"
                                                type="textarea"
                                                rows="1"
                                                validate
                                                required
                                            />
                                            <MDBInput
                                                label="Image URL"
                                                group
                                                name="imageURL"
                                                type="text"
                                                validate
                                                required
                                            />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <MDBBtn color="blue lighten-2" type="submit">
                                                <FontAwesomeIcon icon={faEdit} /> UPDATE
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

export default EditCourse;