import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import toggle from "../../assets/toggle.png";

function NavBar() {
  const email = "pnarain82@gmail.com";

  return (
    <Navbar expand="md" className="nav-bar">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="LOGO" width="80" height="80" />
        </Navbar.Brand>
        <Navbar.Text>
          <span className="mx-2">
            <i class="fa-regular fa-envelope" />
          </span>
          {email}
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <img src={toggle} width="25" height="25" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "space-between" }}
        >
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-link">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-link">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
