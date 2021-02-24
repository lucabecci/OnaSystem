import React, { Fragment, ReactElement } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

function Speed(): ReactElement<HTMLAllCollection> {
  const Hop = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }

    70% {
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0,-4px,0);
    }
    `;

  const MainContainer = styled.div`
    background-color: #16161a;
    display: flex;
    justify-content: center;
    height: 450px;
    width: 100%;
  `;
  const Container = styled.div`
    height: 400px;
    margin: auto;
    width: 80%;
  `;
  const ContainerImage = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    margin: auto;
    width: 100%;
  `;
  const Image = styled.img`
    height: 150px;
    width: 200px;
    margin: auto;
    animation: ${Hop} 2s linear infinite;
    @media (max-width: 960px) {
      height: 120px;
      width: 160px;
    }
  `;
  const Text = styled.h3`
    color: #fffffe;
    font-size: 50px;
    font-weight: 400;
    margin-top: 10px;
    text-align: center;
  `;
  return (
    <Fragment>
      <MainContainer>
        <Container>
          <ContainerImage>
            <Image src="https://i.ibb.co/qnQf3ZL/image-first-section-1.png" />
          </ContainerImage>
          <Text>SOON...</Text>
        </Container>
      </MainContainer>
    </Fragment>
  );
}

export default Speed;
