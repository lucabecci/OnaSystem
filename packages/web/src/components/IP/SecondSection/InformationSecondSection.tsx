import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import IPsearches from './IPsearches'

function InformationSecondSection() {
    const Container = styled.div`
        height: 100px;
        margin: auto;
        width: 50%;
        @media (max-width: 900px) {
            height: 100px;
            width: 90%;
        }
    `
    const Title = styled.h3`
        color: white;
        font-size: 25px;
        font-weight: 400;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 18px;
        }
    `
    const Paragraph = styled.h3`
        color: #94a1b2;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    `
    const ContainerTable = styled.div`
        height: 300px;
        margin: 10px auto auto auto;
        width: 70%;
        @media (max-width: 900px) {
            height: 300px;
            width: 99%;
        }
    `
    return (
        <Fragment>
            <Container>
                <Title>ON HERE YOU CAN SEE YOUR ALL SEARCHES WITH IP INFORMATION</Title>
                <Paragraph>The maximum for save is 10 searchs</Paragraph>
            </Container>
            <ContainerTable>
                <IPsearches/>
            </ContainerTable>
        </Fragment>
    )
}

export default InformationSecondSection
