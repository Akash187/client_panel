import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from "react-router-dom";
import ClientForm from "./ClientForm";

class AddClient extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    balance: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
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
          <Row className="mt-3">
            <Col sm="12">
              <Card>
                <CardHeader>Edit Settings</CardHeader>
                <CardBody>
                  <ClientForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    mobile={this.state.mobile}
                    balance={this.state.balance}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddClient;
