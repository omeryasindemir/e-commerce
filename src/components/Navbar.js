// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Cart from '../features/cart/Cart';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand href="#">E-Commerce App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
          <Cart />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
