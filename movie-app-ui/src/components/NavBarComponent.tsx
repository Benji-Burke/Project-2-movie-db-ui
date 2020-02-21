import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = (props:any) => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  
  

  return (
    <div>
      <Navbar className ='App-header2'>
      
      <Nav>
      <NavItem id='brand'>
        <Link to='/'>MovieFriend</Link>
      </NavItem>
      <NavItem>
            <Link to='/login'>Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/register">Register</Link>
            </NavItem>
            <NavItem>
              <Link to="Profile">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Search Movies</Link>
            </NavItem>
            <NavItem>
              <Link to="/manager">Manager</Link>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Log out</NavLink>
            </NavItem>
            

          </Nav>
        
      </Navbar>
    </div>
  );
}