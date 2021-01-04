import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Admin(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Admin</FirstTitle>
    </Fragment>
  );
}

export default Admin;
