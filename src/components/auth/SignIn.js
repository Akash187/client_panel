import React, {useState} from 'react';
import { connect } from 'react-redux';
import { signIn} from "../../store/actions/authActions";
import {Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button, Alert} from 'reactstrap';

const SignIn = ({authError, signIn}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if(e.target.id === 'email'){
      setEmail(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({email, password});
    // this.props.signUp(this.state);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md={{size: 6, offset: 3}}>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-center mb-2">
                <div className="d-flex align-items-center">
                  <span className="text-primary mr-2">
                    <i className="fas fa-lock"/>
                  </span>
                </div>
                <h2 className="text-uppercase text-primary font-weight-bold mb-0">Login</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" value={email} id="email" placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" value={password} id="password" placeholder="Password" onChange={handleChange}/>
                </FormGroup>
                <Button color="primary" block>Login</Button>
              </Form>
              {authError && <Alert className="mt-3" color="danger">
                { authError }
              </Alert>}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return{
    authError: state.auth.authError
  }
};

const mapDispatchToProps = dispatch => ({signIn: (credentials) => dispatch(signIn(credentials))});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
