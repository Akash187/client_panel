import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, Table} from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

const Dashboard = ({ clients }) => {

  let [totalBalance, setTotalBalance] = useState(0.00);

  useEffect(() => {
    if(clients){
      clients.forEach((client) => {
        totalBalance += parseFloat(client.balance)
      });
      setTotalBalance(totalBalance);
    }
  }, [clients]);

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
            <h5 className="mb-0 ml-1 text-primary">${totalBalance }</h5>
          </div>
        </Col>
        <Col sm="12" md="2" className="d-md-flex justify-content-center align-items-center">
          <NavLink to='/add'>
            <Button color="success" size="sm" className="px-3">+ New</Button>
          </NavLink>
        </Col>
      </Row>
      { isLoaded(clients) && (!clients) ? <h5 className="mt-3"> No Clients </h5> : <Row>
        <Col sm="12" md="10" className="mt-2">
          <Table striped responsive>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            {isLoaded(clients) && clients.map(client => (<tr key={client.id}>
              <td className="text-capitalize"><span>{client.firstName}</span> <span>{client.lastName}</span></td>
              <td>{ client.email }</td>
              <td>${ client.balance }</td>
              <td>
                <NavLink to={`/client/${client.id}`}>
                  <Button color="secondary" size="sm" className="px-2 d-flex align-items-center"><i className="fas fa-arrow-circle-right mr-1" />Detail</Button>
                </NavLink>
              </td>
            </tr>))
            }
            </tbody>
          </Table>
        </Col>
      </Row>}
    </Container>
  );
};

const mapStateToProps = ({ firebase: { auth }, firestore: { ordered }}) => {
  return{
    clients: ordered.clients,
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
  ])
)(Dashboard);
