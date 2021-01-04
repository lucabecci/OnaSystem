import React, { Fragment } from 'react'
import styled from '@emotion/styled'
function Footer(): React.FunctionComponentElement<HTMLAllCollection> {
    //footer structure
    const ContainerFooter = styled.div`
        background-color: #16161a;
        display: flex;
        justify-content: center;
        height: 200px;
        width: 100%;
        @media (max-width: 800px) {
            height: 400px
        }
    `
    const ContainerItems = styled.div`
        display: flex;
        justify-content: space-between;
        margin: auto;
        height: 80%;
        width: 80%;
        @media (max-width: 800px) {
            flex-direction: column;
            width: 100%;
        }
    `
    //footer information
    const ContainerInformation = styled.div`
        margin: auto 5px auto 5px;
        height: 80%;
        width: 80%;
        @media (max-width: 800px) {
            margin: auto;
            padding-bottom: 20px;
        }
    `
    const InformationTitle = styled.h4`
        color: #fffffe;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        cursor: grab;
    `
    const ContainerParagraph = styled.div`
        margin: auto;
        height: 80%;
        width: 60%;
        @media (max-width: 800px) {
            height: 100%;
        }
    `
    const InformationParagraph = styled.p`
        color: #94a1b2;
        font-size: 15px;
        font-weight: 300;
        margin: 12px auto auto auto;
        text-align: center;
        @media (max-width: 800px) {
            font-size: 13px;
        }
    `
    //footer links
    const ContainerLinks = styled.div`
        margin: auto 5px auto 5px;
        height: 80%;
        width: 80%;
        @media (max-width: 800px) {
            margin: auto;
        }
        `
    const LinksTitle = styled.h4`
        color: #fffffe;
        cursor: grab;
        font-size: 18px;
        font-weight: 400;
        text-align: center; 
    `
    const ContainerSubLinks = styled.div`
        display: flex;
        flex-wrap:wrap;
        justify-content: space-around;
        margin: auto;
        height: 80%;
        width: 50%;
        @media (max-width: 800px) {
            height: 50%;
            width: 30%;
        }
    `
    const LinkSocial = styled.a`
        color: #94a1b2;
        margin: 15px 10px 0 10px;
        text-decoration: none;
        @media (max-width: 800px) {
            font-size: 13px;
        }
    `
    //footer final information
    const FooterFinalInformation = styled.h3`
        background: #16161a;
        color: #94a1b2;
        font-size: 15px;
        font-weight: 300;
        padding: 10px 0 10px 0;
        text-align: center;
        @media (max-width: 800px) {
            border-top: 0.1rem solid #94a1b2;  
            font-size: 10px;
        }
    `

    return (
        <Fragment>
            <ContainerFooter>
                <ContainerItems>
                    <ContainerInformation>
                        <InformationTitle>ONA SYSTEM</InformationTitle>
                        <ContainerParagraph>
                            <InformationParagraph>This system was created with Luca Becci(fullstack developer. Argentina, Buenos Aires) for contact see the links in the footer. </InformationParagraph>
                        </ContainerParagraph>
                    </ContainerInformation>
                    <ContainerLinks>
                        <LinksTitle>FIND ME</LinksTitle>
                        <ContainerSubLinks>
                            <LinkSocial href='https://twitter.com/lucabecci' target='blank'>TWITTER</LinkSocial>
                            <LinkSocial>LINKEDIN</LinkSocial>
                            <LinkSocial href='https://github.com/lucabecci' target='blank'>GITHUB</LinkSocial>
                            <LinkSocial href='https://gmail.com/beccibrian' target='blank'>GMAIL</LinkSocial>
                        </ContainerSubLinks>
                    </ContainerLinks>
                </ContainerItems>
            </ContainerFooter>
            <FooterFinalInformation>©2021 Luca Becci. Buenos Aires, Argentina. All Rights Reserved</FooterFinalInformation>
        </Fragment>
    )
}

export default Footer
