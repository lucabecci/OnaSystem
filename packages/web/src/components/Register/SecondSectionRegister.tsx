import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import FormRegister from './FormRegister'
import Alert from '../Alert'
import { IError } from '../../interfaces/ErrorInterface'

function SecondSectionRegister() {
    const [err, setError] = useState<IError>({} as IError)
    const MainContainer = styled.div`
        display: flex;
        justify-content: center;
        height: 610px;
        width: 100%;
        @media (max-width: 900px) {
            height: 700px;
        }
    `
    const Container = styled.div`
        height: 600px;
        margin: auto;
        width: 60%;
        @media (max-width: 900px) {
            width: 90%;
            height: 600px;
        }
    `
    return (
        <Fragment>
            {err.error? <Alert message = {err.message}/> : null}
            <MainContainer>
                <Container>
                    <FormRegister setError={setError}/>
                </Container>
            </MainContainer>
        </Fragment>
    )
}

export default SecondSectionRegister
