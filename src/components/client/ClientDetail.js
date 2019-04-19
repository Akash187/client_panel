import React, {useState} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader, Button, ButtonGroup, UncontrolledCollapse, Input, InputGroupAddon, InputGroup, Form, ListGroup, ListGroupItem} from 'reactstrap';
import {NavLink} from "react-router-dom";

const ClientDetail = (props) => {

  const [balance, setBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(balance);
  };

  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-between align-items-center">
          <div>
            <NavLink exact to='/' className="text-primary d-flex align-items-center">
              <i className="fas fa-arrow-circle-left mr-1"/>
              <p className="font-weight-bold mb-0">Back To Dashboard</p>
            </NavLink>
          </div>
          <ButtonGroup>
            <Button color="secondary" onClick={() => props.history.push('/edit/123')}>Edit</Button>
            <Button color="danger">Delete</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm="12">
          <Card>
            <CardHeader>
              <h4 className="text-truncate font-weight-bold mb-0">Bob Jackson</h4>
            </CardHeader>
            <CardBody>
              <div className="d-flex flex-wrap justify-content-between">
                <h4 className="text-truncate font-weight-bold mb-0">Client ID: {<span className="font-weight-normal">12sdf3j43fj83jf834je843</span>}</h4>
                <div className="d-flex">
                  <h4 className="text-truncate font-weight-bold mb-0">Balance: {<span className="font-weight-normal text-success">$120.00</span>}</h4>
                  <span className="ml-2 text-primary" id="toggler">
                    <i className="fas fa-pencil-alt"/>
                  </span>
                </div>
              </div>
              <UncontrolledCollapse toggler="#toggler" className="clearfix">
                <Form className="float-right mt-3" onSubmit={handleSubmit}>
                  <InputGroup>
                    <Input type="text" id="balance" placeholder="Add New Balance" value={balance} pattern="^\d+\.\d\d$" title="Valid balance is 10.00, 10.90 or 0.78." onChange={(e) => setBalance(e.target.value)} required/>
                    <InputGroupAddon addonType="append">
                      <Button outline color="secondary">Update</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </UncontrolledCollapse>
              <ListGroup className="mt-3">
                <ListGroupItem>
                  <p className="font-weight-bold text-truncate mb-0">Contact Email: {<span className="font-weight-lighter">aks18765@yahoo.co</span>}</p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="font-weight-bold text-truncate mb-0">Contact Number: {<span className="font-weight-lighter">8675493572</span>}</p>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientDetail;
