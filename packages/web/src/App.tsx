import React, { Fragment, ReactElement } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styled from '@emotion/styled'


import Home from './pages/Home';
import Contact from './pages/Contact';
import Ip from './pages/Ip';
import Speed from './pages/Speed';
import Account from './pages/Account';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
function App(): ReactElement<any> {

  return (
    <Fragment>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/ip' component={Ip}/>
          <Route path='/speed' component={Speed}/>
          <Route path='/account' component={Account}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
