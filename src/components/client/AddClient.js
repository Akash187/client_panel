import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from "react-router-dom";
import ClientForm from "./ClientForm";
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import { addClient } from "../../store/actions/clientActions";

class AddClient extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    balance: '0.00'
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addClient(this.state);
    this.props.history.push('/');
  };

  render() {
    const {setting} = this.props;
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
                  {(isLoaded(setting) && !isEmpty(setting)) && <ClientForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    mobile={this.state.mobile}
                    balance={this.state.balance}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    disableBalance={setting.disabledBalanceOnAdd}
                  />}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addClient: (clientDetail) => dispatch(addClient(clientDetail))
  }
};

const mapStateToProps = ({ firebase: { auth }, firestore: { ordered }}) => {
  return{
    setting: ordered.setting ? ordered.setting[0]: null,
    auth
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'setting',
      doc: props.auth.uid
    }
  ])
)(AddClient);
