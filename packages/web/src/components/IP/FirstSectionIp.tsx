import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import SearchComponent from './SearchComponent'

function FirstSectionIp(): React.FunctionComponentElement<HTMLAllCollection> {
    const MainContainer = styled.div`
        height: 500px;
        width: 100%;
    `
    const ContainerItems = styled.div`
        height: 400px;
        margin: 20px auto auto auto;
        width: 60%;
    `
    const ContainerInformation = styled.div`
        height: 150px;
        margin: auto;
        width: 90%;
    ` 
    const Title = styled.h3`
        color: #fffffe;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
    `
    const ContainerButtons = styled.div`
        display: flex;
        justify-content: space-evenly;
        height: 50px;
        margin: 25px auto auto auto;
        width: 100%;
    `
    const Button = styled.button`
        background: transparent;
        border: 2px solid #7f5af0;
        border-radius: 5px;
        color: #fffffe;
        font-size: 12px;
        font-weight: 700;
        padding: 10px 25px 10px 25px;
        transition: ease .8s;
        &:hover{
            background: #7f5af0;
            color: #fffffe;
        }
        @media (max-width: 500px) {
            padding: 15px;
        }
    `

    return (
        <Fragment>
            <MainContainer>
                <ContainerItems>
                    <ContainerInformation>
                        <Title>IP INFORMATION SYSTEM</Title>
                        <ContainerButtons>
                            <Button>SEARCH ANY IP</Button>
                            <Button>SEARCH MY IP</Button>
                        </ContainerButtons>
                    </ContainerInformation>
                    <SearchComponent/>
                </ContainerItems>               
            </MainContainer>
        </Fragment>
    )
}

export default FirstSectionIp
