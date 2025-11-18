import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"
import logo from "../assets/zaagpro-logo.png"
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import Cart from "../pages/Cart";


function Header() {
  const cartItems = useSelector((state)=>state.cartState.cartItems);
  console.log("................",cartItems);
  return (
    <Navbar expand="lg" className="header-bg">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src={logo} className="logo" alt="" srcSet="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">Aboutus</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact us </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link  as={Link} to="/cart" ><TiShoppingCart size={30}/>{cartItems.length}</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;