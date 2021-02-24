import styled from "@emotion/styled";
import React, { Fragment } from "react";

interface Props {
    message: string;
}

function Alert(props: Props) {
    const Container = styled.div`
        background-color: white;
        border-radius: 3px;
        height: 30px;
        margin: 20px auto 20px auto;
        width: 30%;
        @media (max-width: 900px) {
            width: 70%;
        }
    `;
    const Message = styled.h4`
        color: black;
        font-size: 12px;
        font-weight: 400;
        padding: 5px;
        text-align: center;
    `;

    return (
        <Fragment>
            <Container>
                <Message>{props.message}</Message>
            </Container>
        </Fragment>
    );
}

export default Alert;
