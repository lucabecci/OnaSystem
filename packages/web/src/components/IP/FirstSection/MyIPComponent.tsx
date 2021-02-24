import styled from "@emotion/styled";
import React, { Fragment, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { IIPinformation } from "../../../interfaces/IPinterfaces";

function MyIPComponent() {
    const { userData } = useContext(UserContext);
    const data: IIPinformation = userData.ipData;
    const MainContainer = styled.div`
        display: flex;
        height: 250px;
        width: 100%;
    `;
    const Container = styled.div`
        height: 250px;
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 100%;
    `;
    const RowWhite = styled.div`
        background-color: #16161a;
        border-bottom: 1px solid #242629;
        display: flex;
        justify-content: space-between;
        height: 30px;
        padding: 1px;
        width: 100%;
    `;
    const Element = styled.p`
        color: #fffffe;
        font-size: 18px;
        font-weight: 300;
        @media (max-width: 700px) {
            font-size: 15px;
        }
    `;
    const Text = styled.p`
        color: #fffffe;
        font-size: 18px;
        font-weight: 400;
        @media (max-width: 700px) {
            font-size: 13px;
        }
    `;
    return (
        <Fragment>
            <MainContainer>
                <Container>
                    <RowWhite>
                        <Element>CITY:</Element>
                        <Text>{data.city}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>COUNTRY NAME:</Element>
                        <Text>{data.country_name}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>COUNTRY CAPITAL:</Element>
                        <Text>{data.country_capital}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>CONTINENT:</Element>
                        <Text>{data.continent_code}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>LATITUDE:</Element>
                        <Text>{data.latitude}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>LONGITUDE:</Element>
                        <Text>{data.longitude}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>ORGANIZATION:</Element>
                        <Text>{data.org}</Text>
                    </RowWhite>
                    <RowWhite>
                        <Element>POSTAL CODE:</Element>
                        <Text>{data.postal}</Text>
                    </RowWhite>
                </Container>
            </MainContainer>
        </Fragment>
    );
}

export default MyIPComponent;
