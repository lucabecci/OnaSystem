import styled from '@emotion/styled';
import React, { Fragment, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import UserContext from '../../context/UserContext';
import { loginData } from '../../services/UserServices';

interface Props {
    setError: any
}

function FormLogin (props: Props): React.FunctionComponentElement<HTMLInputElement>{

    const {setUserData} = useContext(UserContext)
    const history = useHistory()
    const { register, handleSubmit} = useForm();
    //css components
    const Form = styled.form``
    const Container = styled.div`
      margin: auto;
      width: 80%;
    `
    const ContainerItems = styled.div`
      display: flex;
      flex-direction: column;
      padding: 5px;
    `
    const Label = styled.label`
      color: #fffffe;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
    `
    const ContainerInput = styled.div`
      margin: auto;
      width: 70%;
      @media (max-width: 900px) {
            width: 100%;
      }
    `
    const Input = styled.input`
      font-size: 17px;
      height: 40px;
      border: none;
      text-align: left;
      width: 100%;
    `
    const ContainerButton = styled.div`
      margin: 20px auto auto auto;
    `
    const Button = styled.button`
      background: #7f5af0;
      border: 2px solid #7f5af0;
      border-radius: 5px;
      color: #fffffe;
      font-size: 15px;
      font-weight: 700;
      padding: 20px 60px 20px 60px;
      transition: ease .8s;
      @media (max-width: 500px) {
          padding: 18px 45px 18px 45px;
      }
    `

    //functions
      async function submitDataLogin(data: any, e: any){
        e.preventDefault()
        const userData = {
          email: data.email,
          password: data.password,
        }
        const result = await loginData(userData.email, userData.password)
        if(result.error === true){
          props.setError({
            error: true,
            message: result.message
          })
          return
        }
        props.setError({
          error: false,
          message: result.message
        })
        setUserData({
          token: result.user.token,
          user: result.user.user,
          isAdmin: result.user.user.isAdmin
        })
        localStorage.setItem('auth-token', result.user.token)
        history.push('/')
        return 
      }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(submitDataLogin)}>
              <Container>
                <ContainerItems>
                  <Label>Email</Label>
                  <ContainerInput>
                    <Input
                    type='email'
                    name="email"
                    ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>Password</Label>
                  <ContainerInput>
                    <Input 
                      type='password' 
                      name="password"
                      ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                    <ContainerButton>
                        <Button
                        type='submit'
                        >LOGIN</Button>
                    </ContainerButton>
                </ContainerItems>
                </Container>
            </Form>
        </Fragment>
    )
}

export default FormLogin
