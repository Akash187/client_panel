import React, { useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Container} from 'reactstrap';
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="primary" className="text-white" fixed expand="md">
        <Container>
          <NavbarBrand>Client Panel</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <SignedInLinks/>
            <SignedOutLinks/>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;