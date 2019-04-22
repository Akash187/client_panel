import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader, CustomInput} from 'reactstrap';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { updateSetting } from "../../store/actions/settingActions";

const Setting = ({setting, updateSetting}) => {

  const [allowNewClient, setAllowNewClient] = useState();
  const [disabledBalanceOnAdd, setDisabledBalanceOnAdd] = useState();
  const [disabledBalanceOnEdit, setDisabledBalanceOnEdit] = useState();
  const [hasUpdated, setHasUpdated] = useState(false);

  useEffect(() => {
    setAllowNewClient(setting ? setting.allowNewClient: false);
    setDisabledBalanceOnAdd(setting ? setting.disabledBalanceOnAdd: false);
    setDisabledBalanceOnEdit(setting ? setting.disabledBalanceOnEdit: false);
  },[setting]);

  const update = (e) => {
    if(e.target.id === 'allowNewClient'){
      setAllowNewClient(!allowNewClient);
    }else if(e.target.id === 'disabledBalanceOnAdd'){
      setDisabledBalanceOnAdd(!disabledBalanceOnAdd);
    }else{
      setDisabledBalanceOnEdit(!disabledBalanceOnEdit);
    }
    setHasUpdated(true);
  };

  useEffect(() => {
    if(hasUpdated){
      updateSetting({allowNewClient, disabledBalanceOnAdd, disabledBalanceOnEdit});
      setHasUpdated(false);
    }
  },[hasUpdated]);
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
                <CustomInput type="checkbox" checked={allowNewClient} id="allowNewClient" label="Allow New Client" inline onChange={update}/>
              </div>
              <div>
                <CustomInput type="checkbox" checked={disabledBalanceOnAdd} id="disabledBalanceOnAdd" label="Disable Balance on Add" inline onChange={update}/>
              </div>
              <div>
                <CustomInput type="checkbox" checked={disabledBalanceOnEdit} id="disabledBalanceOnEdit" label="Disable Balance of Edit" inline onChange={update}/>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    updateSetting: (updatedSetting) => dispatch(updateSetting(updatedSetting))
  }
};

const mapStateToProps = (state, ownProps) => {
  const doc = state.firestore.ordered;
  return{
    id: state.firebase.auth.uid,
    setting: doc.setting ? doc.setting[0] : null
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'setting',
      doc: props.id
    },
  ])
)(Setting);
