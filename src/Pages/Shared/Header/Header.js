import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={HashLink} to="/">
            <img
              src="https://i.ibb.co/17zn0ry/service-7.png"
              alt=""
              style={{ borderRadius: "50%", width: "40px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={HashLink} to="/#home" className="mx-3">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} to="/#services" className="mx-3">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/blogs" className="mx-3">
                Blogs
              </Nav.Link>
              <Nav.Link as={HashLink} to="/about" className="mx-3">
                About
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact" className="mx-3">
                Contact
              </Nav.Link>
              {user?.email && (
                <Nav.Link as={HashLink} to="/dashboard" className="mx-3">
                  Dashboard
                </Nav.Link>
              )}
            </Nav>

            {!user?.email && (
              <Nav.Link as={HashLink} to="/login" className="mx-3">
                Login
              </Nav.Link>
            )}

            {user?.email && (
              <span>
                {/* <p style={{ color: "white" }}>{user?.displayName}</p> */}
                <img
                  className="user-photo"
                  src={user.photoURL}
                  alt=""
                  style={{ borderRadius: "50%", width: "40px" }}
                />
              </span>
            )}
            {user?.email && (
              <Nav.Link onClick={logOut} href="#logout" className="ml-4">
                Logout
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
