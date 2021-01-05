import React, { Fragment, useContext } from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'
import UserContext from '../context/UserContext'
function FirstSectionHome(): React.FunctionComponentElement<HTMLAllCollection> {

    const history = useHistory()
    const {userData} = useContext(UserContext)

    const startedNow = () => history.push('/register')
    const account = () => history.push('/account')

    const MainContainerSection = styled.div`
        background-color: #16161a;
        height: 400px;
        width: 100%;
        @media (max-width: 500px) {
            height: 400px
        }
        @media (max-width: 960px) {
            height: 600px
        }
    `
    const ItemsContainer = styled.div`
        display: flex;
        height: 300px;
        width: 90%;
        @media (max-width: 500px) {
            justify-content: center;
            width: 100%;
        }
    `
    const ContainerInformation = styled.div`
        height: 200px;
        margin: 50px;
        width: 90%;
        @media (max-width: 500px) {
            margin: 30px;
        }
    `
    const TitleInformation = styled.h3`
        color: #fffffe;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
        @media (max-width: 500px) {
            font-size: 25px;
        }
        @media (max-width: 960px) {
            font-size: 25px
        }
    `
    const ParagraphMainContainer = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 10px;
        width: 100%;
        
    `
    const ParagraphContainer = styled.div`
        width: 70%;
    `

    const ParagraphInformation = styled.p`
        color: #94a1b2;
        font-size: 18px;
        font-weight: 300;
        text-align: justify;
        @media (max-width: 500px) {
            font-size: 13px;
            text-align: center;
        }
        @media (max-width: 960px) {
            font-size: 17px;
            text-align: justify;
        }
    `
    const ButtonMainContainer = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 10px;
    `
    const ButtonContainer = styled.div`
        display: flex;
        justify-content: center;
        width: 40%;
    `
    const ButtonStarted = styled.button`
        background: #7f5af0;
        border: none;
        border-radius: 5px;
        color: #fffffe;
        font-size: 15px;
        padding: 20px;
        transition: ease .8s;
        &:hover{
            background: #fffffe;
            color: #7f5af0;
            font-size: 18px;
            padding: 25px;
        }
        @media (max-width: 500px) {
            padding: 15px;
        }
    `
    //img

    const ContainerImage = styled.div`
        height: 400px;
        width: 80%;
        @media (max-width: 500px) {
            display: none;
        }
    `
    const Image = styled.img`
        height: 75%;
        margin: 35px;
        width: 70%;
        @media (max-width: 500px) {
            display: none;
        }
        @media (max-width: 960px) {
            height: 55%;
            margin: 65px;
            width: 70%;
        }
    `
    return (
        <Fragment>
            <MainContainerSection>
                <ItemsContainer>
                    <ContainerInformation>
                        <TitleInformation>
                            WELCOME TO ONA SYSTEM
                        </TitleInformation>
                        <ParagraphMainContainer>
                            <ParagraphContainer>
                                <ParagraphInformation>
                                A tool for your speed connection and your IP information. If you need to know you speed connection you have to go to SPEED TEST section and if you need to know your ip information you have to go to SEARCH IP section.
                                </ParagraphInformation>
                            </ParagraphContainer>
                        </ParagraphMainContainer>
                        <ButtonMainContainer>
                            <ButtonContainer>
                               {
                                   userData.user ?
                                   <ButtonStarted onClick={() => account()}>ACCOUNT</ButtonStarted>:
                                   <ButtonStarted onClick={() => startedNow()}>STARTED NOW</ButtonStarted>
                                   
                               }
                            </ButtonContainer>
                        </ButtonMainContainer>
                    </ContainerInformation>
                    <ContainerImage>
                        <Image src='https://i.ibb.co/qnQf3ZL/image-first-section-1.png'/>
                    </ContainerImage>
                </ItemsContainer>
            </MainContainerSection>
        </Fragment>
    )
}

export default FirstSectionHome
