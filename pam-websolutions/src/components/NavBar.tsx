import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet, NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/images/pam-logo1.png";


const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className=" navigation">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logo" src={Logo} alt="" />
            Pam Web Solutions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="navigation-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <NavLink to="services">Services</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default NavBar
