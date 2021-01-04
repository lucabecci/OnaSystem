import React, { Fragment } from 'react'
import {useHistory} from 'react-router-dom'
import styled from '@emotion/styled'

function NavbarOptions(): React.FunctionComponentElement<HTMLAllCollection> {

    const history = useHistory()

    const ipSearch = () => history.push('/ip')
    const speedConnection = () => history.push('/speed')
    const login = () => history.push('/login')
    const register = () => history.push('/register')

    const LiLink = styled.li`
        list-style: none;
        @media (max-width: 800px) {
            text-align: center
        }
    `
    const ALinks = styled.a`
        display: block;
        text-decoration: none;
        color: white;
        cursor: pointer;
        padding: 1rem;
        &:hover{
            background-color: #3d3d47;
        }
        @media (max-width: 800px) {
            padding: .5rem 1rem;
        }
    `

    const AVioletLinks = styled.a`
    background-color: #7f5af0;
    display: block;
    text-decoration: none;
    color: white;
    cursor: pointer;
    padding: 1rem;
    &:hover{
        background-color: #6e59ac;
    }
    @media (max-width: 800px) {
        padding: .5rem 1rem;
    }
    `
    return (
        <Fragment>
            <LiLink><ALinks onClick={()=> ipSearch()}>IP SEARCH</ALinks></LiLink>
            <LiLink><ALinks onClick={()=> speedConnection()}>SPEED CONNECTION</ALinks></LiLink>
            <LiLink><AVioletLinks onClick={()=> register()}>REGISTER</AVioletLinks></LiLink>
            <LiLink><ALinks onClick={()=> login()}>LOGIN</ALinks></LiLink>
        </Fragment>
    )
}

export default NavbarOptions
