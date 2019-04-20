import React from 'react';
import {BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Header from "../layout/Header";
import Dashboard from "../layout/Dashboard";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/Register";
import ClientDetail from "../client/ClientDetail";
import AddClient from "../client/AddClient";
import EditClient from "../client/EditClient";
import Setting from "../layout/Setting";
import ProtectedRoute from "./ProtectedRoute";
import NotProtectedRoute from "./NotProtectedRoute";

const Router = () => {
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <div className="mt-5 pt-4 mb-5">
          <Switch>
            <NotProtectedRoute path='/login' component={SignIn}/>
            <NotProtectedRoute path='/register' component={SignUp}/>
            <ProtectedRoute exact path='/' component={Dashboard}/>
            <ProtectedRoute path='/client/:id' component={ClientDetail}/>
            <ProtectedRoute path='/add' component={AddClient}/>
            <ProtectedRoute path='/setting' component={Setting}/>
            <ProtectedRoute path='/edit/:id' component={EditClient}/>
            <ProtectedRoute path="*" render = {() => <Redirect to="/" />}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default Router;