import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import HomePage from "./HomePage";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="black" dark expand="md" className="mb-4">
        <div className="container">
          <MDBNavbarBrand>
            <strong className="white-text">VIRTUAL SHELL</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem className="ml-2">
                <MDBNavLink to={""}>HOME</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="ml-2">
                <MDBNavLink to={"/login"}>LOGIN</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="ml-2">
                <MDBNavLink to={"/signup"}>SIGNUP</MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem className="ml-2">
              <MDBNavLink to="#!">LOGOUT</MDBNavLink>
            </MDBNavItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </div>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;