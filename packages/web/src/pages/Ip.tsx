import React, { Fragment, ReactElement } from "react";
import FirstSectionIp from "../components/IP/FirstSection/FirstSectionIp";
import SecondSectionIp from "../components/IP/SecondSection/SecondSectionIp";

function Ip(): ReactElement<HTMLAllCollection> {
    return (
        <Fragment>
            <FirstSectionIp />
            <SecondSectionIp />
        </Fragment>
    );
}

export default Ip;
