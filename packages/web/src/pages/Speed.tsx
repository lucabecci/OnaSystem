import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Speed(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Speed</FirstTitle>
    </Fragment>
  );
}

export default Speed;
