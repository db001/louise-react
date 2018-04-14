import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">
              Louise Lahive          
            </a>
          </Navbar.Brand>
          <Navbar.Toggle>
          </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#about">
              About
            </NavItem>
            <NavItem eventKey={2} href="#gallery">
              Gallery
            </NavItem>
            <NavItem eventKey={3} href="#exhibitions">
              Exhibitions
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>        
    )
  }
};

export default NavigationBar;