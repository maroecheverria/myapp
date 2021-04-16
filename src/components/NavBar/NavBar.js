import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { getFirestore } from "../../configs/firebase";

const CustomNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");

    categoriesCollection.get().then((querySnapshot) => {
      setCategories(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
        <NavLink to="/">
          <Navbar.Brand>Tienda Coder</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavLink key={category.id} to={`/category/${category.id}`} className="dropdown-item">
                  {category.name}
                </NavLink>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
