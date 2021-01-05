import React, { Fragment, ReactElement } from 'react';
import FirstSectionHome from '../components/FirstSectionHome'
import SecondSectionHome from '../components/SecondSectionHome';
function Home(): ReactElement<HTMLAllCollection> {
  return (
    <Fragment>
        <FirstSectionHome/>
        <SecondSectionHome/>
    </Fragment>
  );
}

export default Home;
