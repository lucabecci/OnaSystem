import React, { Fragment, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import Ip from './pages/Ip';
import Speed from './pages/Speed';
import Account from './pages/Account';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import UserContext from './context/UserContext'
import {IUserData} from './interfaces/UserInterfaces'
import Error404 from './pages/Error404';
import styled from '@emotion/styled';
import { checkLoggedIn } from './services/UserServices';


function App(): React.FunctionComponentElement<HTMLAllCollection> {

  const [userData, setUserData] = useState<IUserData>({} as IUserData)
  useEffect(() => {
    async function getData(){
      const user: IUserData = await checkLoggedIn()
      setUserData({
        token: user.token,
        user: user.user,
        admin: user.admin
      })
    }
    getData()
  }, [])

  const Background = styled.div`
    background-color: #16161a;
  `
  return (
    <Fragment>
      <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
          <Background>
            <Navbar/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/ip' component={Ip}/>
                <Route path='/speed' component={Speed}/>
                {
                  userData.user ?
                  <Route path='/account' component={Account}/>
                  :
                  null
                }
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
                {
                  userData.admin ?
                  <Route path='/admin' component={Admin}/>
                  :
                  null
                }
                <Route component={Error404} />
              </Switch>
              <Footer/>
          </Background>
        </UserContext.Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
