import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (

      <MDBNavbar color="black" dark expand="md">
        <div className="container">

          {/* <MDBNavbarBrand>
            <strong className="white-text">VIRTUAL SHELL</strong>
          </MDBNavbarBrand> */}

          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to={""}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/High-contrast-utilities-terminal.svg/1024px-High-contrast-utilities-terminal.svg.png" width="25px" height="25px" alt="" />
                <strong> VIRTUAL SHELL</strong>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

            <MDBNavbarNav right>

              <MDBNavItem className="ml-2">
                <MDBNavLink to={""}><FontAwesomeIcon icon={faHome}/> HOME</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="ml-2">
                <MDBNavLink to={"login"}><FontAwesomeIcon icon={faSignInAlt}/> LOGIN</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="ml-2">
                <MDBNavLink to={"signup"}><FontAwesomeIcon icon={faUserPlus}/> SIGNUP</MDBNavLink>
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