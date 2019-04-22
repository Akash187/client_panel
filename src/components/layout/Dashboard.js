import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import ClientList from "../client/ClientList";

const Dashboard = ({ clients, setting }) => {

  const updateTotalBalance = (clients) => {
    let totalBalance = 0;
    clients.forEach((client) => {
      totalBalance += parseFloat(client.balance)
    });
    return totalBalance.toFixed(2);
  };


  return (
    <Container>
      <Row>
        <Col sm="12" md="10" className="d-flex justify-content-between align-items-baseline flex-wrap">
          <div className="d-flex">
            <span className="d-flex align-items-center mr-2">
              <i className="fas fa-users"/>
            </span>
            <h2 className="mb-0">Clients</h2>
          </div>
          <div className="d-flex my-1">
            <h5 className="mb-0">Total Owed</h5>
            <h5 className="mb-0 ml-1 text-primary">${(clients) ? updateTotalBalance(clients) : 0.00}</h5>
          </div>
        </Col>
        <Col sm="12" md="2" className="d-md-flex justify-content-center align-items-center">
          {
            isLoaded(setting) && <div>{(setting && setting.allowNewClient) && <NavLink to='/add'>
              <Button color="success" size="sm" className="px-3">+ New</Button>
            </NavLink>}</div>
          }
        </Col>
      </Row>
      { isLoaded(clients) && <ClientList clients={clients}/> }
    </Container>
  );
};

const mapStateToProps = ({ firebase: { auth }, firestore: { ordered }}) => {
  return{
    clients: ordered.clients,
    setting: ordered.setting ? ordered.setting[0]: null,
    auth
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'clients',
      where: [['authorId', '==', props.auth.uid]],
    },
    {
      collection: 'setting',
      doc: props.auth.uid
    }
  ])
)(Dashboard);
