import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Login(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Login</FirstTitle>
    </Fragment>
  );
}

export default Login;
