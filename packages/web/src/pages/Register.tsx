import React, { Fragment, ReactElement } from "react";
import styled from "@emotion/styled";
import FirstSectionRegister from "../components/Register/FirstSectionRegister";
import SecondSectionRegister from "../components/Register/SecondSectionRegister";
function Register(): ReactElement<HTMLAllCollection> {
    const Background = styled.div`
        background-color: #16161a;
        height: 800px;
        width: 100%;
        @media (max-width: 900px) {
            height: 810px;
        }
    `;

    return (
        <Fragment>
            <Background>
                <FirstSectionRegister />
                <SecondSectionRegister />
            </Background>
        </Fragment>
    );
}

export default Register;
