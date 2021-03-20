import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand ><Link className='text-warning text-decoration-none' to='/home'><h2>Awesome Transport</h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='mx-2 text-warning text-decoration-none' to='/home'><h4>Home</h4></Link>
                        <Link className='mx-2 text-warning text-decoration-none' to='/destination/destination'><h4>Destination</h4></Link>
                        <Link className='mx-2 text-warning text-decoration-none' to='/blog'><h4>Blog</h4></Link>
                        <Link className='mx-2 text-warning text-decoration-none' to='/contact'><h4>Contact</h4></Link>
                        {
                            loggedInUser.email && loggedInUser.displayName ? <Link to='/login' className='mx-2 text-warning text-decoration-none' ><h4>{loggedInUser.displayName}</h4></Link> : <Link className="mx-2 btn btn-warning text-white px-4" to='/login'>Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
