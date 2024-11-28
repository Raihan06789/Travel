import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const history = useHistory()
    const {user,logOut, isAdmin} = useAuth()

    //login route push after click on login btn in nav bar
    const loginHandle= () => {
        history.push('/login')
    }
    console.log(isAdmin, user);
    return (
        <Navbar collapseOnSelect expand="lg" sticky= 'top' className='py-1s navigation-bar'>
        <Container>
        <Navbar.Brand className='logo' as={Link} to="/home">Travel</Navbar.Brand>
        <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-end menu">
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/destination">Destinations</Nav.Link>
                 {
                     user?.email && isAdmin ? <>
                    <Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>
                     <NavDropdown title="Admin" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to="/manageAllBooking">Manage All Booking</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/AddNewDestination">
                        Add New Destination
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/MakeAdmin">
                        Make Admin
                    </NavDropdown.Item>
                    </NavDropdown>
                      </> : ''
                     
                 }
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                
            <Navbar.Text>
                {user?.email || user?.displayName ? <h6 className='mx-3 my-3 fw-bold'><i  className="fas fa-user-check fs-5 "></i> {user?.displayName}</h6> : ''}
             </Navbar.Text>
            {
                user?.email || user?.displayName ? 
                <button onClick={logOut} className="btn btn-dark">Logout</button> 
                :
                <button onClick={loginHandle} className="btn btn-dark">Login</button>
            }
                         
             </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;