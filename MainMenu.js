
import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Club Social</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to= "/login/"  >Logout</Link>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/registro/">Registro</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  