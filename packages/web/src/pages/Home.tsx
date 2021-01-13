import React, { Fragment, ReactElement } from 'react';
import FirstSectionHome from '../components/Home/FirstSectionHome'
import SecondSectionHome from '../components/Home/SecondSectionHome';
function Home(): ReactElement<HTMLAllCollection> {
  return (
    <Fragment>
        <FirstSectionHome/>
        <SecondSectionHome/>
    </Fragment>
  );
}

export default Home;
