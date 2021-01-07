import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
import FirstSectionRegister from '../components/FirstSectionRegister';
function Register(): ReactElement<HTMLAllCollection> {

    const Background = styled.div`
        background-color: #16161A;
        height: 500px;
        width: 100%;
    `

  return (
    <Fragment>
        <Background>
            <FirstSectionRegister/>
        </Background>
    </Fragment>
  );
}

export default Register;
