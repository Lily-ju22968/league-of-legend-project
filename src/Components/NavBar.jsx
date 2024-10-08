import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar= () => {
  return <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navbar' href="#home">Home</Nav.Link>
            <Nav.Link className='navbar' href="#features">Features</Nav.Link>
            <Nav.Link className='navbar' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>;
}

export default NavBar;