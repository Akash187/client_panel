import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from "../layout/Header";
import Dashboard from "../layout/Dashboard";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/Register";
import ClientDetail from "../client/ClientDetail";
import AddClient from "../client/AddClient";
import EditClient from "../client/EditClient";
import Setting from "../layout/Setting";

const Router = () => {
  return(
    <BrowserRouter>
      <div>
        <Header/>
        <div className="mt-5 pt-3">
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/login' component={SignIn}/>
            <Route path='/register' component={SignUp}/>
            <Route path='/client/:id' component={ClientDetail}/>
            <Route path='/add' component={AddClient}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/edit/:id' component={EditClient}/>
            <Route path="*" render = {() => <Redirect to="/login" />}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
};

export default Router;