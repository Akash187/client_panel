import React from 'react';
import {Nav, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = ({signOut, profile}) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem className="mr-2 text-uppercase">{ profile.name }</NavItem>
      <NavItem className="mr-2">
        <NavLink exact={true} to='/'>Dashboard</NavLink>
      </NavItem>
      <NavItem className="mr-2">
        <NavLink to='/setting'>Setting</NavLink>
      </NavItem>
      <NavItem><div style={{cursor: 'pointer'}} onClick={signOut}>Logout</div></NavItem>
    </Nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
