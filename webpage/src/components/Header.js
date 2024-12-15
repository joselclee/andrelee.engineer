import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">andrelee.engineer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
              </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/joselclee" target="_blank">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://github.com/joselclee" target="_blank">
              Github
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/Resume">
              Resume
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/Games">
              Games
            </Nav.Link>
            <Nav.Link as={Link} to="/Hobbies">
              Hobbies
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header