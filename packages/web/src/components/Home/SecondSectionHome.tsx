import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import TarjetInformation from '../TarjetInformation'

function SecondSectionHome(): React.FunctionComponentElement<HTMLAllCollection> {

    const MainContainer = styled.div`
        background-color: #242629;
        height: 600px;
        width: 100%;
        @media (max-width: 800px) {
        height: 1000px;
        }
    `
    const ContainerMainFirstInformation = styled.div`
        display: flex;
        justify-content: center;
        height: 250px;
        width:100%;
        @media (max-width: 800px) {
        height: 300px;
        }
    `
    const ContainerFirstInformation = styled.div`
        height: 180px;
        margin: auto;
        width: 60%;
        @media (max-width: 800px) {
            height: 250px;
        }
    `
    const TitleFirstInformation = styled.h3`
        color: #fffffe;
        font-size: 25px;
        font-weight: 400;
        word-spacing: 5px;
        text-align: center;
        @media (max-width: 1000px) {
            font-size: 18px;
        }
    `
    const ContainerParagraphFirstInformation = styled.div`
        margin: auto;
        padding-top: 20px;
        width: 50%;
        @media (max-width: 1000px) {
            width: 70%;
        }
    `
    const ParagraphFirstInformation = styled.div`
        color: #94a1b2;
        font-size: 20px;
        font-weight: 300;
        letter-spacing: 1px;
        text-align: center;
        word-spacing: 5px;
        @media (max-width: 800px) {
            font-size: 15px;
            text-align: justify;
            word-spacing: 0px;
        }
        
    `
    //second information
    const ContainerMainSecondInformation = styled.div`
        height: 400px;
        margin: auto;
        width: 90%;
    `

    const ContainerSecondInformaation = styled.div`
        display: flex;
        justify-content: space-around;
        @media (max-width: 800px) {
            flex-direction:column;
        }
    `


    return (
        <Fragment>
            <MainContainer>
                <ContainerMainFirstInformation>
                    <ContainerFirstInformation>
                        <TitleFirstInformation>
                        HERE IS WHERE YOU WILL FIND ANY IP AND TEST YOUR NETWORK CONNECTION
                        </TitleFirstInformation>
                        <ContainerParagraphFirstInformation>
                        <ParagraphFirstInformation>
                        Please use the ip search section with responsibility. Don't use for bad intentions
                        </ParagraphFirstInformation>
                        </ContainerParagraphFirstInformation>
                    </ContainerFirstInformation>
                </ContainerMainFirstInformation>
                <ContainerMainSecondInformation>
                    <ContainerSecondInformaation>
                        <TarjetInformation
                            letter='IP'
                            title='IP INFO'
                            information="Value refers to the measurement of brightness of a hue. Basically it's how light or dark the color is and how much light it emits."
                            image='imagepath'
                        ></TarjetInformation>
                        <TarjetInformation
                            letter='SP'
                            title='SPEED TEST'
                            information="Value refers to the measurement of brightness of a hue. Basically it's how light or dark the color is and how much light it emits."
                            image='imagepath2'
                        ></TarjetInformation>
                    </ContainerSecondInformaation>
                </ContainerMainSecondInformation>
            </MainContainer>
        </Fragment>
    )
}

export default SecondSectionHome
