import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem className="mr-2 text-capitalize">Akash Kumar</NavItem>
      <NavItem className="mr-2">
        <NavLink exact={true} to='/'>Dashboard</NavLink>
      </NavItem>
      <NavItem className="mr-2">
        <NavLink to='/setting'>Setting</NavLink>
      </NavItem>
      <NavItem>Logout</NavItem>
    </Nav>
  );
};

export default SignedInLinks;
