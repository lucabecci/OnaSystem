import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Account(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Account</FirstTitle>
    </Fragment>
  );
}

export default Account;
