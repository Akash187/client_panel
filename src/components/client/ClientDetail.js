import React, {useState} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader, Button, ButtonGroup, UncontrolledCollapse, Input, InputGroupAddon, InputGroup, Form, ListGroup, ListGroupItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateBalance, deleteClient } from "../../store/actions/clientActions";
import DeleteModal from "../layout/DeleteModal";

const ClientDetail = ({ client, history, updateBalance, deleteClient}) => {

  const [balance, setBalance] = useState('');
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal)
  };

  const removeClient = () => {
    toggle();
    deleteClient(client.id);
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBalance(client.id, balance);
    setBalance('');
  };

  return (
    (client) ? <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-between align-items-center">
          <div>
            <NavLink exact to='/' className="text-primary d-flex align-items-center">
              <i className="fas fa-arrow-circle-left mr-1"/>
              <p className="font-weight-bold mb-0">Back To Dashboard</p>
            </NavLink>
          </div>
          <ButtonGroup>
            <Button color="secondary" onClick={() => history.push(`/edit/${client.id}`)}>Edit</Button>
            <Button color="danger" onClick={toggle}>Delete</Button>
            <DeleteModal modal={modal} toggle={toggle} removeClient={removeClient}/>
          </ButtonGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5 className="text-truncate font-weight-bold mb-0 text-capitalize">
                <span>{client.firstName}</span> <span>{client.lastName}</span>
              </h5>
            </CardHeader>
            <CardBody>
              <div className="d-flex flex-wrap justify-content-between">
                <h5 className="font-weight-bold mb-0">Client ID: <span className="font-weight-normal">{client.id}</span></h5>
                <div className="d-flex">
                  <h4 className="font-weight-bold mb-0">Balance: <span className={"font-weight-normal text-primary"}>${client.balance}</span></h4>
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
                  <p className="font-weight-bold mb-0">Contact Email: <span className="font-weight-lighter">{ client.email }</span></p>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="font-weight-bold mb-0">Contact Number: <span className="font-weight-lighter">{ client.mobile }</span></p>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container> :
      <div/>
);
};

const mapDispatchToProps = (dispatch) => {
  return{
    updateBalance: (id, balance) => dispatch(updateBalance(id, balance)),
    deleteClient: (id) => dispatch(deleteClient(id))
  }
};

const mapStateToProps = (state, ownProps) => {
  const doc = state.firestore.ordered;
  return{
    id: ownProps.match.params.id,
    auth: state.firebase.auth,
    client: doc.clients ? doc.clients[0] : null
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'clients',
      doc: props.id
    },
  ])
)(ClientDetail);
