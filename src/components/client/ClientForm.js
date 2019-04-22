import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const ClientForm = ({firstName='', lastName='', email='', mobile='', balance, handleChange, handleSubmit, disableBalance}) => {

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">First Name</Label>
        <Input type="text" value={firstName} id="firstName" placeholder="First Name" pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." onChange={handleChange} required/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Last Name</Label>
        <Input type="text" value={lastName} id="lastName" placeholder="Last Name" pattern="[A-Za-z0-9_ ]{3,}" title="Minimum three letter name." onChange={handleChange} required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" value={email} id="email" placeholder="Email" onChange={handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Mobile Number</Label>
        <Input type="text" value={mobile} id="mobile" placeholder="Mobile Number" pattern="[0-9]{10}" title="Mobile Number must be of 10 digit." onChange={handleChange} required/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Balance</Label>
        <Input type="text" value={(balance !== '0.00') ? balance : ''} disabled={disableBalance} id="balance" placeholder="0.00" pattern="^\d+\.\d\d$" title="Valid balance is 10.00, 10.90 or 0.78." onChange={handleChange}/>
      </FormGroup>
      <Button color="primary" block>Submit</Button>
    </Form>
  );
};

export default ClientForm;
