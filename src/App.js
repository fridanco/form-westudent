import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Body from './Body';

function App() {
  return (
    <>
   
      <Navbar style={{backgroundColor:"white"}} className="d-flex justify-content-between">
        <Container  >
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap" rel="stylesheet" />
          <Navbar.Brand href="https://www.dispensoacademy.it">
            <img
              src="/dispenso-logo-d-blu-scuro.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Dispenso logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse  className="d-flex justify-content-end" id="responsive-navbar-nav">
          <Nav.Link className="orange-button mr-2" href="https://www.dispensoacademy.it/winter-practice-medicina/" >SCOPRI I CORSI</Nav.Link>
          <Nav.Link className="Mont mr-2" href="https://www.dispensoacademy.it/carrello/" style={{color:"black", fontWeight:"800"}}>Carrello</Nav.Link>
          <Nav.Link className="orange-button" href="https://www.dispensoacademy.it/practice-login/">LOGIN</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Body />
    </>
  );
}

export default App;
