import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router'
import styles from './NavBar.module.css'

// add regular icons to fontawesome library 
library.add(far)

const NavBar = () => {
    return (
        <Navbar expand="md" fixed='top'>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className={styles.brand}>TechStables</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                            <FontAwesomeIcon icon="fa-regular fa-house" className='me-2' />
                            Home
                        </NavLink>
                        <NavLink to="signin"
                            className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                            <FontAwesomeIcon icon="fa-regular fa-user" className='me-2' />
                            Sign In
                        </NavLink>
                        <NavLink to="signup"
                            className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                            <FontAwesomeIcon icon="fa-regular fa-address-book" className='me-2' />
                            Sign Up
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar