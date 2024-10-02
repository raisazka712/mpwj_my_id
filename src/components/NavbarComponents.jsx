import React, { useState, useEffect } from "react";
import logoSrawung from "../assets/LOGO/baruy.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function NavbarComponents() {
  const [changeColor, setChangeColor] = useState(false);
  const location = useLocation();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar
        expand="lg"
        sticky="top"
        className={`${changeColor ? "color-active" : ""} navbar`}
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home" className="brand">
            <img src={logoSrawung} alt="logoSrawung" className="logoSrawung" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <NavLink className="nav-link" exact to="/">
                HOME
              </NavLink>
              <NavLink className="nav-link" to="/Kategori">
                KATEGORI
              </NavLink>
              <NavLink className="nav-link" to="/Nominasi">
                NOMINASI
              </NavLink>
              <NavDropdown title="EVENT" id="basic-nav-dropdown">
                <NavLink className="dropdown-item" to="/Event2023">
                  2023
                </NavLink>
                <NavLink className="dropdown-item" to="/Event2024">
                  2024
                </NavLink>
              </NavDropdown>
              <NavLink className="nav-link" to="/Sponsor">
                SPONSOR
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponents;