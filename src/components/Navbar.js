import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Louise Lahive
          </Navbar.Brand>
          <Navbar.Toggle>
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              About
            </NavItem>
            <NavItem eventKey={2}>
              Gallery
            </NavItem>
            <NavItem eventKey={3}>
              Exhibitions
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>        
    )
  }
};

export default NavigationBar;