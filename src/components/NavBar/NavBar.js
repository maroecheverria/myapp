import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'

const CustomNavBar = () => {
    return (
      <div className="NavBar">
        <Navbar bg="light" expand="lg">
          <NavLink to="/"><Navbar.Brand >Tienda Coder</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavLink to="/category/1" className="dropdown-item">Hombre</NavLink>
                <NavLink to="/category/2" className="dropdown-item">Mujer</NavLink>
                <NavLink to="/category/3" className="dropdown-item">Niñoz</NavLink>
              </NavDropdown>
              <NavLink to="/about-us" className="nav-link">Quiénes Somos</NavLink>
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default CustomNavBar;
