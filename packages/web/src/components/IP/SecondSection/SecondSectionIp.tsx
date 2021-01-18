import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import InformationSecondSection from './InformationSecondSection'

function SecondSectionIp() {
    const MainContainer = styled.div`
        background: #242629;
        height: 300px;
        margin: auto;
        width: 80%;
        @media (max-width: 900px) {
            height: 350px;
            width: 100%;
        }
    `
    return (
        <Fragment>
            <MainContainer>
                <InformationSecondSection/>
            </MainContainer>
        </Fragment>
    )
}

export default SecondSectionIp
