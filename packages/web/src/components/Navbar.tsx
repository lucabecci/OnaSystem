import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Navbar(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: blue;
    `

  return (
    <Fragment>
        <FirstTitle>Navbar</FirstTitle>
    </Fragment>
  );
}

export default Navbar;
