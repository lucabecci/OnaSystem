import styled from "@emotion/styled";
import React, { Fragment, useState } from "react";
import { IError } from "../../interfaces/ErrorInterface";
import Alert from "../Alert";
import FormLogin from "./FormLogin";

function SecondSectionLogin() {
    const [err, setError] = useState<IError>({} as IError);
    const MainContainer = styled.div`
        display: flex;
        justify-content: center;
        height: 100px;
        width: 100%;
        @media (max-width: 900px) {
            height: 100px;
        }
    `;
    const Container = styled.div`
        height: 100px;
        margin: auto;
        width: 60%;
        @media (max-width: 900px) {
            width: 90%;
            height: 100px;
        }
    `;
    return (
        <Fragment>
            {err.error ? <Alert message={err.message} /> : null}
            <MainContainer>
                <Container>
                    <FormLogin setError={setError} />
                </Container>
            </MainContainer>
        </Fragment>
    );
}

export default SecondSectionLogin;
