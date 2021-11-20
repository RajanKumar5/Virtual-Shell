import React, { Component, Fragment } from 'react'
import UserNavbar from './UserNavbar';
import { MDBBreadcrumb, MDBBox, MDBTypography, MDBBreadcrumbItem, MDBContainer, MDBJumbotron, MDBBtn, MDBCol, MDBRow } from "mdbreact";


class UserCoursePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email")
        };
    }

    sayHello = () => {
        this.props.history.push("/task-page");
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavbar history={this.props.history} />

                <MDBJumbotron fluid>
                    <MDBContainer>
                        <h2 className="display-4">RHCSA</h2>
                        <p className="lead" style={{ textJustify: 'inter-word', textAlign: 'justify' }}>
                            An IT professional who has earned the Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments. The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200).
                        </p>
                    </MDBContainer>
                </MDBJumbotron>

                <MDBContainer>
                    <MDBCol class="mx-auto">
                        <MDBBtn light color="blue lighten-2" onClick={this.sayHello}>
                            <MDBBreadcrumbItem iconRegular icon="star" active>Task 1</MDBBreadcrumbItem>
                        </MDBBtn>

                        <MDBBtn light color="blue lighten-2" onClick={this.sayHello}>
                            <MDBBreadcrumbItem iconRegular icon="star" active>Task 2</MDBBreadcrumbItem>
                        </MDBBtn>

                        <MDBBtn light color="blue lighten-2" onClick={this.sayHello}>
                            <MDBBreadcrumbItem iconRegular icon="star" active>Task 3</MDBBreadcrumbItem>
                        </MDBBtn>

                        <MDBBtn light color="blue lighten-2" onClick={this.sayHello}>
                            <MDBBreadcrumbItem iconRegular icon="star" active>Task 4</MDBBreadcrumbItem>
                        </MDBBtn>

                        <MDBBtn light color="blue lighten-2" onClick={this.sayHello}>
                            <MDBBreadcrumbItem iconRegular icon="star" active>Task 5</MDBBreadcrumbItem>
                        </MDBBtn>
                    </MDBCol>
                </MDBContainer>
            </div>
        )
    }
}

export default UserCoursePage;