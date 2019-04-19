import React from 'react';
import {Container, Row, Col, Button, Table} from 'reactstrap';
import {NavLink} from "react-router-dom";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" md="10" className="d-flex justify-content-between align-items-baseline">
          <div className="d-flex">
            <span className="d-flex align-items-center mr-2">
              <i className="fas fa-users"/>
            </span>
            <h2 className="mb-0">Clients</h2>
          </div>
          <div className="d-flex">
            <h5 className="mb-0">Total Owed</h5>
            <h5 className="mb-0 ml-1 text-primary">$280.56</h5>
          </div>
        </Col>
        <Col sm="12" md="2" className="d-md-flex justify-content-center align-items-center">
          <NavLink to='/add'>
            <Button color="success" size="sm" className="px-3">+ New</Button>
          </NavLink>
        </Col>
      </Row>
      <Row>
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
            <tr>
              <td>Mark Anthony</td>
              <td>markanthoney12345678@gmail.com</td>
              <td>@mdo</td>
              <td>
                <NavLink to='client/123'>
                  <Button color="secondary" size="sm" className="px-2 d-flex align-items-center"><i className="fas fa-arrow-circle-right mr-1"/>Detail</Button>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <Button color="secondary" size="sm" className="px-2">Detail</Button>
              </td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <Button color="secondary" size="sm" className="px-2">Detail</Button>
              </td>
            </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
