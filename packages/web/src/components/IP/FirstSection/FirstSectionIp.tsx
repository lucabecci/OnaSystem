import styled from '@emotion/styled'
import React, { Fragment,useState } from 'react'
import MyIPComponent from './MyIPComponent'
import SearchComponent from './SearchComponent'


function FirstSectionIp(): React.FunctionComponentElement<HTMLAllCollection> {
    const [service, setService] = useState<string>('find')
    const MainContainer = styled.div`
        height: 500px;
        width: 100%;
        margin-bottom: 30px;
        @media (max-width: 900px) {
            height: 550px;
            margin-bottom: 20px;
        }
    `
    const ContainerItems = styled.div`
        height: 400px;
        margin: 20px auto auto auto;
        width: 60%;
        @media (max-width: 900px) {
            height: 550px;
            width: 90%;
        }
    `
    const ContainerInformation = styled.div`
        height: 150px;
        margin: auto;
        width: 90%;
        @media (max-width: 900px) {
            width: 100%;
        }
    ` 
    const Title = styled.h3`
        color: #fffffe;
        font-size: 30px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 20px;
        }
    `
    const ContainerButtons = styled.div`
        display: flex;
        justify-content: space-evenly;
        height: 50px;
        margin: 25px auto auto auto;
        width: 100%;
        @media (max-width: 900px) {
            justify-content: space-around;
        }   
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
                            <Button 
                            onClick={() => setService('find')}>SEARCH ANY IP</Button>
                            <Button onClick={() => setService('my')}>SEARCH MY IP</Button>
                        </ContainerButtons>
                    </ContainerInformation>
                    {
                        service === 'find' ?
                        <SearchComponent/>:
                        <MyIPComponent/>
                    }
                </ContainerItems>               
            </MainContainer>
        </Fragment>
    )
}

export default FirstSectionIp
