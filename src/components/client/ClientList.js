import React from 'react';
import { NavLink } from 'react-router-dom';
import {Row, Col, Button, Table} from 'reactstrap';

const ClientList = ({clients}) => {
  return (
    (clients.length > 0) ? <Row>
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
          {(clients) && clients.map(client => (<tr key={client.id}>
            <td className="text-capitalize"><span>{client.firstName}</span> <span>{client.lastName}</span></td>
            <td>{client.email}</td>
            <td>${client.balance}</td>
            <td>
              <NavLink to={`/client/${client.id}`}>
                <Button color="secondary" size="sm" className="px-2 d-flex align-items-center"><i
                  className="fas fa-arrow-circle-right mr-1"/>Detail</Button>
              </NavLink>
            </td>
          </tr>))
          }
          </tbody>
        </Table>
      </Col>
    </Row> : <h5 className="mt-3"> No Clients </h5>
  );
};

export default ClientList;
