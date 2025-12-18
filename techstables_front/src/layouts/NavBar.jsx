import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons' 

// add regular icons to fontawesome library 
library.add(far)

const NavBar = () => {
    return (
        <Navbar expand="md" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">TechStables</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><FontAwesomeIcon icon="fa-regular fa-house" />Home</Nav.Link>
                        <Nav.Link href="#link"><FontAwesomeIcon icon="fa-regular fa-user" />Sign In</Nav.Link>
                        <Nav.Link href="#link"><FontAwesomeIcon icon="fa-regular fa-address-book" />Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar