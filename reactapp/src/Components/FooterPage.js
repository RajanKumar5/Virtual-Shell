import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small fixed-bottom mt-5">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: VIRTUAL SHELL
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;