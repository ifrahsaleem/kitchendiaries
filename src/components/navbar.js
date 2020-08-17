import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class Header_Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    //binds
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container-fluid">
            <NavbarBrand className="ml-2" href="/">
              <img
                src="assets/images/logo.png"
                width="100"
                height="100"
                alt="Kitchen Diaries"
              />
              <span className="ml-2 mt-1" id="navbar-heading">
                Kitchen Diaries
              </span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Menu
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem> Frosted Cupcakes</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Muffins</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Truffles</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Tarts</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Fritters</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Mini Cheesecakes</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Brownies</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Cookies</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Treat Boxes</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Premium Boxes</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink className="nav-link" to="/Contactus">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header_Nav;
