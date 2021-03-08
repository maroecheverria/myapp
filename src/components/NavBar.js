import {Component} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from "./CartWidget";

class CustomNavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Tienda Coder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about-us">Quienes Somos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#categories/1">Tecnología</NavDropdown.Item>
                <NavDropdown.Item href="#categories/2">Casa y Jardín</NavDropdown.Item>
                <NavDropdown.Item href="#categories/3">Salud y Belleza</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <CartWidget/>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
};

export default CustomNavBar;
