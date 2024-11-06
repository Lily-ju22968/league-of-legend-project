import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo-LoL.png';

const NavBar= () => {
  return <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='d-flex justify-content-start'>
          <Navbar.Brand> <img src={Logo} alt="Logo" style={{ width: '70px', height: '70px' }}/></Navbar.Brand>
          <Navbar.Brand><Link className='link' to={'/'}>Home</Link></Navbar.Brand>
          <Navbar.Brand><Link className='link' to={'/LorePage'}>Lore</Link></Navbar.Brand>
          <Navbar.Brand><Link className='link' to={'/RelationsPage'}>Relations</Link></Navbar.Brand>
          <Navbar.Brand><Link className='link' to={'/ItemsPage'}>Items</Link></Navbar.Brand>
          <Navbar.Brand><Link className='link' to={'/SpellsSummonersPage'}>Summoners</Link></Navbar.Brand>
        </Container>
      </Navbar>
    </>;
}

export default NavBar;