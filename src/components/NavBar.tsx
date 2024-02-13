import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand
          href="#Home"
          style={{ fontWeight: "bold", fontSize: "x-large" }}
          className="navhover"
        >
          Localhost
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#About" className="navhover">
              About
            </Nav.Link>
            <Nav.Link eventKey={2} href="#Skills" className="navhover">
              Skills
            </Nav.Link>
            <Nav.Link href="#Contact" className="navhover">
              {" "}
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
