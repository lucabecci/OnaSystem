import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Register(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Register</FirstTitle>
    </Fragment>
  );
}

export default Register;
