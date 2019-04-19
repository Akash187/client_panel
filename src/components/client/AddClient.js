import React from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from "react-router-dom";

const AddClient = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <div>
            <NavLink exact to='/' className="text-primary d-flex align-items-center">
              <i className="fas fa-arrow-circle-left mr-1"/>
              <p className="font-weight-bold mb-0">Back To Dashboard</p>
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddClient;
