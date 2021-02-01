import styled from '@emotion/styled'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import UserContext from '../../../context/UserContext'
import InformationSecondSection from './InformationSecondSection'

function SecondSectionIp() {
    const [heightLogged, setHeightLogged] = useState<string[]>(['250px', '250px'])
    const {userData} = useContext(UserContext)
    useEffect(() => {
        if(userData.user){
        setHeightLogged(['400px', '500px'])
        }
    }, [])
    const MainContainer = styled.div`
        background: #242629;
        border-radius: 10px;
        height: ${heightLogged[0]};
        margin: auto;
        width: 80%;
        @media (max-width: 900px) {
            height: ${heightLogged[1]};
            width: 100%;
        }
    `
    return (
        <Fragment>
            <MainContainer>
                <InformationSecondSection logged = {userData.user}/>
            </MainContainer>
        </Fragment>
    )
}

export default SecondSectionIp
