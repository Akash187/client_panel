import React, {useState} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button} from 'reactstrap';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if(e.target.id === 'name'){
      setName(e.target.value)
    }else if(e.target.id === 'email'){
      setEmail(e.target.value.trim())
    }else{
      setPassword(e.target.value.trim())
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " : " + email + ": " + password);
    // this.props.signUp(this.state);
  };

  return (
    <Container className="mt-5 pt-5">
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
                <h2 className="text-uppercase text-primary font-weight-bold">Register</h2>
              </div>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" value={name} id="name" placeholder="Name" pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." onChange={handleChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" value={email} id="email" placeholder="Email" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" value={password} id="password" placeholder="Password" pattern="[a-zA-Z0-9~!@#$%^&*]{6,}" title="Password must be atleast 6 characters. Should contain letters, number or special characters." onChange={handleChange} required/>
                </FormGroup>
                <Button color="primary" size="sm" block>Register</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
