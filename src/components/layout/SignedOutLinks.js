import React from 'react';
import {Nav, NavItem} from 'reactstrap';

const SignedOutLinks = () => {
  return (
      <Nav className="ml-auto" navbar>
        <NavItem>Login</NavItem>
        <NavItem className="ml-2">Register</NavItem>
      </Nav>
  );
};

export default SignedOutLinks;
