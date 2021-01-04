import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Ip(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Ip</FirstTitle>
    </Fragment>
  );
}

export default Ip;
