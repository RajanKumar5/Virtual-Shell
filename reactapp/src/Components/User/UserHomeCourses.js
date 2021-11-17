import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import UserNavbar from './UserNavbar';



const UserHomeCourses = () => {
    return (
        <div>
            <UserNavbar />
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://7labs.io/wp-content/uploads/2018/06/Red-Hat-RHCSA-Exam-Questions-2.jpg" class="figure-img img-fluid rounded" alt="RHCSAthumbnail" width="200" height="300"
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>Red Hat Certified System Administrator - RHCSA</MDBCardTitle>
                        <MDBCardText>An IT professional who has earned the Red Hat Certified System Administrator
                            (RHCSA®) is able to perform the core system administration skills required in
                            Red Hat Enterprise Linux environments.</MDBCardText>
                        <MDBBtn href="/usercoursepage">Go</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://7labs.io/wp-content/uploads/2018/06/Red-Hat-RHCSA-Exam-Questions-2.jpg" class="figure-img img-fluid rounded" alt="RHCEthumbnail" width="300" height="200"
                        waves />
                    <MDBCardBody>
                        <MDBCardTitle>Red Hat Certified Engineer - RHCE</MDBCardTitle>
                        <MDBCardText>A Red Hat® Certified Engineer (RHCE®) is a Red Hat Certified System Administrator (RHCSA) 
                                     who is ready tochnologies,
                                     and apply automation for efficiency and innovation.</MDBCardText>
                        <MDBBtn href="/usercoursepage">Go</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </div>
    )
}

export default UserHomeCourses;