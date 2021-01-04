import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Home(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Home</FirstTitle>
    </Fragment>
  );
}

export default Home;
