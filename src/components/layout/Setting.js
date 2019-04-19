import React, { useState } from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader, CustomInput} from 'reactstrap';
import {NavLink} from "react-router-dom";

const Setting = () => {

  const [registration, setRegistration] = useState(true);
  const [disabledBalanceOnAdd, setDisabledBalanceOnAdd] = useState(false);
  const [disabledBalanceOnEdit, setDisabledBalanceOnEdit] = useState(false);

  return (
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
              <div>
                <CustomInput type="checkbox" checked={registration} id="registration" label="Allow Registration" inline onChange={() => setRegistration(!registration)}/>
              </div>
              <div>
                <CustomInput type="checkbox" checked={disabledBalanceOnAdd} id="disabledBalanceOnAdd" label="Disable Balance on Add" inline onChange={() => setDisabledBalanceOnAdd(!disabledBalanceOnAdd)}/>
              </div>
              <div>
                <CustomInput type="checkbox" checked={disabledBalanceOnEdit} id="disabledBalanceOnEdit" label="Disable Balance of Edit" inline onChange={() => setDisabledBalanceOnEdit(!disabledBalanceOnEdit)}/>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Setting;
