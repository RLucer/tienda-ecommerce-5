import { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
//import { ChildExample } from './ChildExample';
import { UserContext } from '../context/UserContext'
// import { CountProduct } from './CountProduct';
//import './Navbar.css'
import Shopping from './shop';

//import { Cart } from '../components/Cart'

//import { Row, Col } from 'react-bootstrap';
//import DetailProduct  from './pages/DetailProduct';

export default function NavbarMenu() {

  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="custom-navbarbg-body">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src="/log.jpeg"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="200"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="ms-auto new_link" to="/home">Home</Nav.Link>
            {user ? (
              <NavDropdown title={user} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} className="ms-auto new_link" to="/perfil">Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} className="ms-auto new_link" to="/compras">Mis Compras</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} className="ms-auto new_link" to="/logout">Cerrar Sesión</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} className="ms-auto new_link" to="/sesion">Iniciar Sesión</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <Shopping />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 