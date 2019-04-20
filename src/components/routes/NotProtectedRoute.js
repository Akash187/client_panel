import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const NotProtectedRoute = ({component: Component, auth, ...rest}) => {
  return (
    <Route {...rest} render={
      (props) => {
        if(isLoaded(auth)){
          if(!auth.uid){
            return <Component {...props}/>
          }else{
            return <Redirect to="/"/>
          }
        }
      }
    }/>
  );
};

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
};

export default connect(mapStateToProps)(NotProtectedRoute);
