import React, { Fragment } from 'react'
import styled from '@emotion/styled'
function SecondSectionHome(): React.FunctionComponentElement<HTMLAllCollection> {
    const MainContainer = styled.div`
        background-color: #242629;
        height: 400px;
        width: 100%;
    `
    
    return (
        <Fragment>
            <MainContainer></MainContainer>
        </Fragment>
    )
}

export default SecondSectionHome
