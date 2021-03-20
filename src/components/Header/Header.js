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
                <Navbar.Brand ><Link to='/home'><h2 className='text-success'>Awesome Transport</h2></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/destination/destination'>Destination</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                        {
                            loggedInUser.displayName ? <Nav.Link><Link to='/login'>{loggedInUser.displayName}</Link></Nav.Link> : <Nav.Link><Link className="btn btn-success" to='/login'>Login</Link></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;
