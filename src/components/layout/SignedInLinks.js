import React from 'react';
import {Nav, NavItem} from 'reactstrap';

const SignedInLinks = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>vks@gmail.com</NavItem>
      <NavItem className="ml-2">Setting</NavItem>
      <NavItem className="ml-2">Logout</NavItem>
    </Nav>
  );
};

export default SignedInLinks;
