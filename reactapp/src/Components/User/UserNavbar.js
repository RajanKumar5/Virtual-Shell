import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class UserNavbar extends Component {

  userLogout = () => {
    localStorage.removeItem("email");
    this.props.history.push("/login");
  }

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  changePassword = () => {
    this.props.history.push("/changePassword");
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
              <MDBNavLink to={"/userhomecourses"}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/High-contrast-utilities-terminal.svg/1024px-High-contrast-utilities-terminal.svg.png" width="25px" height="25px" alt="" />
                <strong> VIRTUAL SHELL</strong>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>

          <MDBNavbarToggler onClick={this.toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

            <MDBNavbarNav right>

              <MDBNavItem className="ml-2">
                <MDBNavLink to={"/userhomecourses"}><FontAwesomeIcon icon={faHome} /> HOME</MDBNavLink>
              </MDBNavItem>

              {/* <MDBNavItem className="ml-2">
                <MDBNavLink to={"login"}>LOGIN</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="ml-2">
                <MDBNavLink to={"signup"}>SIGNUP</MDBNavLink>
              </MDBNavItem> */}
              <MDBNavItem className="ml-2">
                <MDBNavLink to={"/updatePassword"}><FontAwesomeIcon icon={faExchangeAlt} /> CHANGE PASSWORD</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem className="ml-2">
                <MDBNavLink onClick={this.userLogout} to=""><FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </div>
      </MDBNavbar>
    );
  }
}

export default UserNavbar;