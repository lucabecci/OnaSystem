import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

interface TarjetProps{
    letter: string
    title: string
    information: string
    image: string
}

function TarjetInformation(props: TarjetProps): React.FunctionComponentElement<HTMLAllCollection> {
    const colorChange = keyframes`
        from, 20%, 53%, 80%, to {
            border: 2px solid #7f5af0;
        }

        40%, 43% {
            border: 2px solid #FFFFFe;
        }

        70% {
            border: 2px solid #7f5af0;
        }

        90% {
            border: 2px solid #FFFFFe;
        }
    `
    const letterChange = keyframes`
    from, 20%, 53%, 80%, to {
        color: #7f5af0;
    }

    40%, 43% {
        color: #FFFFFe;
    }

    70% {
        color: #7f5af0;
    }

    90% {
        color: #FFFFFe;
    }
`
    
    const Background = styled.div`
        background-color: #16161A;
        border-radius: 10px;
        height: 300px;
        width: 45%;
    `
    const ContainerMainFirstInformation = styled.div`
        height: 80px;
        margin: 40px auto auto auto;
        width: 70%;
    `
    const ContainerFirstInformation = styled.div`
        display: flex;
        height: 80px;
        margin: 40px auto 40px auto;
        width: 100%;
    `

    const Logo = styled.div`
        background-color: #16161A;
        border: 2px solid #7f5af0;
        border-radius: 10px;
        display: flex;
        height: 90px;
        box-shadow: 0 15px 10px #18181a;
        width: 100px;
        animation: ${colorChange} 5s linear infinite;
    `
    const Letter = styled.div`
        color: #7f5af0;
        font-size: 40px;
        font-weight: 700;
        margin: auto;
        animation: ${letterChange} 5s linear infinite;
    `
    const Title = styled.h3`
        color: #FFFFFe;
        font-size: 30px;
        font-weight: 400;
        padding: 40px 20px;
    `
    const Paragraph = styled.p`
        color: #94a1b2;
        letter-spacing: 1px;
        text-align: justify;
        word-spacing: 3px;
    `
    
    return (
        <Fragment>
            <Background>
                <ContainerMainFirstInformation>
                   <ContainerFirstInformation>
                        <Logo>
                            <Letter>
                                {props.letter}
                            </Letter>
                        </Logo>
                        <Title>{props.title}</Title>
                   </ContainerFirstInformation>
                   <Paragraph>
                       {props.information}
                   </Paragraph>
                </ContainerMainFirstInformation>
            </Background>
        </Fragment>
    )  
}

export default TarjetInformation
