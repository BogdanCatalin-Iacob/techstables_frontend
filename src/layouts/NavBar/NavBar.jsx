import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router'
import styles from './NavBar.module.css'
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar/Avatar';
import axios from 'axios';
import { useClickOutsideToggle } from '../../hooks/useClickOutsideToggle';

// add regular icons to fontawesome library 
library.add(far)

const NavBar = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    const handleSignOut = async () => {
        try {
            await axios.post('/dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const addPostIcon = (
        <NavLink to="/posts/create"
            className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
            <FontAwesomeIcon icon="fa-regular fa-plus-square" className='me-2' />
            Add post
        </NavLink>
    )
    const loggedInIcons = (
        <>
            <NavLink to="/feed"
                className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                <FontAwesomeIcon icon="fa-regular fa-rectangle-list" className='me-2' />
                Feed
            </NavLink>
            <NavLink to="/liked"
                className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                <FontAwesomeIcon icon="fa-regular fa-heart" className='me-2' />
                Liked
            </NavLink>
            <NavLink to="/"
                className={styles.NavLink}
                onClick={handleSignOut}>
                <FontAwesomeIcon icon="fa-regular fa-circle-right" className='me-2' />
                Sign out
            </NavLink>
            <NavLink to={`/profiles/${currentUser?.profile_id}`}
                className={styles.NavLink}>
                <Avatar src={currentUser?.profile_image} text="Profile" height={40}/>
            </NavLink>
        </>
    )
    const loggedOutIcons = (
        <>
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
        </>
    )

    return (
        <Navbar expanded={expanded} expand="md" fixed='top'>
            <Container className={`${styles.Navbar} rounded-4`}>
                <NavLink to="/">
                    <Navbar.Brand className={styles.brand}>TechStables</Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    ref={ref}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? `${styles.active}` : `${styles.NavLink}`}>
                            <FontAwesomeIcon icon="fa-regular fa-house" className='me-2' />
                            Home
                        </NavLink>
                        {/* show the post icon only if the current user exists */}
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar