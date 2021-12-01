import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              APP
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/Form"
                style={{ textDecoration: "none", color: "white" }}
              >
                single Input
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/Excel"
                style={{ textDecoration: "none", color: "white" }}
              >
                Excel Upload
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/AllData"
                style={{ textDecoration: "none", color: "white" }}
              >
                All Data
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Header
