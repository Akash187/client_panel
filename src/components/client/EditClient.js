import React, {Component} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from "react-router-dom";
import ClientForm from "./ClientForm";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {updateClientDetail} from "../../store/actions/clientActions";
import {isEmpty, isLoaded} from "react-redux-firebase";

class EditClient extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    balance: ''
  };

  componentWillReceiveProps(newProps) {
    const { client } = newProps;
    if(client){
      this.setState({...client});
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateClientDetail(this.props.client.id, this.state);
    this.props.history.push('/');
  };

  render() {
    const {client, setting} = this.props;
    return (
      (client) ? <div>
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
                    disableBalance={setting.disabledBalanceOnEdit}
                  />}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> : <div/>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updateClientDetail: (id, clientDetail) => dispatch(updateClientDetail(id, clientDetail))
  }
};

const mapStateToProps = (state, ownProps) => {
  const doc = state.firestore.ordered;
  return{
    id: ownProps.match.params.id,
    auth: state.firebase.auth,
    client: doc.clients ? doc.clients[0] : null,
    setting: doc.setting ? doc.setting[0]: null,
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'clients',
      doc: props.id
    },
    {
      collection: 'setting',
      doc: props.auth.uid
    }
  ])
)(EditClient);
