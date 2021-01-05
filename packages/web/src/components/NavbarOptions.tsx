import React, { Fragment, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import styled from '@emotion/styled'
import UserContext from '../context/UserContext'

function NavbarOptions(): React.FunctionComponentElement<HTMLAllCollection> {

    const history = useHistory()
    const {userData, setUserData} = useContext(UserContext)

    const ipSearch = () => history.push('/ip')
    const speedConnection = () => history.push('/speed')
    const login = () => history.push('/login')
    const register = () => history.push('/register')
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
            admin: false
        })
        localStorage.setItem('auth-token', '')
        history.push('/')
    }

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
        transition: ease .8s;
        &:hover{
            background-color: #7f5af0;
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
    transition: ease .8s;
    &:hover{
        background-color: #fffffe;
        color: #7f5af0;
    }
    @media (max-width: 800px) {
        padding: .5rem 1rem;
    }
    `
    return (
        <Fragment>
            <LiLink><ALinks onClick={()=> ipSearch()}>IP-SEARCH</ALinks></LiLink>
            <LiLink><ALinks onClick={()=> speedConnection()}>SPEED-CONNECTION</ALinks></LiLink>
            {
                userData.user ? 
                <LiLink><AVioletLinks onClick={()=> logout()}>LOGOUT</AVioletLinks></LiLink>
                :
                <>
                    <LiLink><AVioletLinks onClick={()=> register()}>REGISTER</AVioletLinks></LiLink>
                    <LiLink><ALinks onClick={()=> login()}>LOGIN</ALinks></LiLink>
                </>
            }
        </Fragment>
    )
}

export default NavbarOptions
