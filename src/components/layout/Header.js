import React, { useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Container} from 'reactstrap';
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const Header = ({ auth, profile }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const component = () => {
    if (isLoaded(auth)) {
      if(auth.uid){
        return <SignedInLinks profile={profile}/>
      }else{
        return <SignedOutLinks/>
      }
    }
  };

  return (
    <div>
      <Navbar color="primary" light className="text-white" fixed="top" expand="md">
        <Container>
          <NavbarBrand>Client Panel</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {component()}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
};

export default connect(mapStateToProps)(Header);