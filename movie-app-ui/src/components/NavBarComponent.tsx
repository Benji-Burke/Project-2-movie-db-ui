import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = (props:any) => {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className ='App-header2'>
     
          <Nav>
            
              
              <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <Link to="Profile">Profile</Link>
            </NavItem>
            <NavItem>
              <NavLink href="/">Search Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Favorite Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Liked Movies</NavLink>
            </NavItem>
            

          </Nav>
        
      </Navbar>
    </div>
  );
}