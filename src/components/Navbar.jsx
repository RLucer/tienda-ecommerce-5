import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { ChildExample } from './ChildExample';
import { UserContext } from '../context/UserContext'
import { CountProduct } from './CountProduct';
import './Navbar.css'

//import { Cart } from '../components/Cart'

//import { Row, Col } from 'react-bootstrap';
//import DetailProduct  from './pages/DetailProduct';

export default function NavbarMenu() {

  const { user } = useContext(UserContext);



  return user ? (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand as={Link} to="/home">  <img
          src="/log.jpeg"
          width="200"
          height="200"
          className="d-inline-block align-top"
          alt=""
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="ms-auto " to="/home">Home</Nav.Link>
            <Nav.Link as={Link} className="ms-auto" to=""></Nav.Link>
            <NavDropdown title=<h5> {user}  </h5> id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} className="ms-auto" to="/perfil">Mi Perfil</NavDropdown.Item>
              <NavDropdown.Item as={Link} className="ms-auto" to="/compras">Mis Compras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} className="ms-auto" to="/logout">Cerrar Session</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/cart"> <h5><CountProduct /> </h5><h1>🛒</h1></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  ) : (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand as={Link} to="/home">  <img
          src="/log.jpeg"
          width="210"
          height="210"
          className="d-inline-block align-top"
          alt=""
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="ms-auto" to="/home">Home</Nav.Link>
            <Nav.Link as={Link} className="ms-auto" to="/sesion"> Iniciar Sesion</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/cart"> <h5><CountProduct /> </h5><h1>🛒</h1></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


} 