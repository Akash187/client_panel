import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
  return (
      <Nav className="ml-auto" navbar>
        <NavItem className="mr-2">
          <NavLink to='/login'>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/register'>Register</NavLink>
        </NavItem>
      </Nav>
  );
};

export default SignedOutLinks;
