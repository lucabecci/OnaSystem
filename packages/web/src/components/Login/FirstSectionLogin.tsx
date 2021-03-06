import styled from "@emotion/styled";
import React, { Fragment } from "react";

function FirstSectionLogin() {
    const MainContainer = styled.div`
        display: flex;
        justify-content: center;
        height: 110px;
        margin: 10px auto auto auto;
        width: 100%;
    `;
    const Container = styled.div`
        height: 160px;
        margin: auto;
        width: 50%;
        @media (max-width: 900px) {
            width: 90%;
        }
    `;
    const Title = styled.h3`
        color: #94a1b2;
        font-size: 30px;
        font-weight: 400;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 25px;
        }
    `;
    const ParagraphContainer = styled.div`
        height: 110px;
        margin: 10px auto auto auto;
        width: 60%;
        @media (max-width: 900px) {
            width: 80%;
        }
        @media (max-width: 1200px) {
            width: 70%;
        }
    `;
    const Paragraph = styled.p`
        color: #94a1b2;
        font-size: 19px;
        font-weight: 300;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 16px;
            text-align: justify;
        }
        @media (max-width: 1200px) {
            font-size: 16px;
        }
    `;
    return (
        <Fragment>
            <MainContainer>
                <Container>
                    <Title>LOGIN</Title>
                    <ParagraphContainer>
                        <Paragraph>
                            Hello again! I hope you are enjoying ONA
                        </Paragraph>
                    </ParagraphContainer>
                </Container>
            </MainContainer>
        </Fragment>
    );
}

export default FirstSectionLogin;
