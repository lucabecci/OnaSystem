import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
import FirstSectionLogin from '../components/Login/FirstSectionLogin';
import SecondSectionLogin from '../components/Login/SecondSectionLogin';
function Login(): ReactElement<HTMLAllCollection> {

    const Background = styled.div`
      background-color: #16161A;
      height: 500px;
      width: 100%;
      @media (max-width: 900px) {
          height: 450px;
      }
    `

  return (
    <Fragment>
        <Background>
          <FirstSectionLogin/>
          <SecondSectionLogin/>
        </Background>
    </Fragment>
  );
}

export default Login;
