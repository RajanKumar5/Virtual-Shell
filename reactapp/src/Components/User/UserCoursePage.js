import React, { Component } from 'react'
import UserNavbar from './UserNavbar';
import { MDBBreadcrumb, MDBBox, MDBTypography, MDBBreadcrumbItem, MDBContainer } from "mdbreact";


class UserCoursePage extends Component {
    render() {
        return (
            <div>
                <UserNavbar />
                <center>
                <MDBTypography tag='h1'>Red Hat Certified System Administrator - RHCSA</MDBTypography>
                </center>

                <MDBContainer>
                    <MDBBreadcrumb light color="blue lighten-2">
                        <MDBBreadcrumbItem iconRegular icon="star" active>Chapter 1</MDBBreadcrumbItem>
                    </MDBBreadcrumb>

                    <MDBBreadcrumb light color="blue lighten-2">
                        <MDBBreadcrumbItem iconRegular icon="star" active>Chapter 2</MDBBreadcrumbItem>
                    </MDBBreadcrumb>

                    <MDBBreadcrumb light color="blue lighten-2">
                        <MDBBreadcrumbItem iconRegular icon="star" active>Chapter 3</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </MDBContainer>
            </div>
        )
    }
}

export default UserCoursePage;