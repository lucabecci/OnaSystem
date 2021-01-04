import React, { Fragment, ReactElement } from 'react';
import styled from '@emotion/styled'
function Contact(): ReactElement<HTMLAllCollection> {

    const FirstTitle = styled.h2`
        color: red;
    `

  return (
    <Fragment>
        <FirstTitle>Contact</FirstTitle>
    </Fragment>
  );
}

export default Contact;
