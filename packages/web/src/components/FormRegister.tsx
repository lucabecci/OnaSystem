import styled from '@emotion/styled';
import React, { Fragment, useContext } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { IUserRegister } from '../interfaces/UserInterfaces';
import { registerData } from '../services/UserServices';

interface Props {
  setError: any
}

function FormRegister(props: Props): React.FunctionComponentElement<HTMLAllCollection> {
    const {setUserData} = useContext(UserContext)
    const history = useHistory()
    const { register, handleSubmit} = useForm<IUserRegister>();
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
      async function submitData(data: any){
        const userData = {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          password: data.password,
          passwordCheck: data.passwordCheck,
          age: data.age
        }

        const result = await registerData(userData)
        if(result.error === true){
          props.setError({
            error: true,
            message: result.message
          })
          return
        }
        props.setError({
          error: false,
          message: ''
        })
        setUserData({
          token: result.user.token,
          user: result.user.user,
          isAdmin: false
        })
        localStorage.setItem('auth-token', result.user.token)
        history.push('/')
      }

    return (
        <Fragment>
            <Form onSubmit={handleSubmit(submitData)}>
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
                  <Label>FirstName</Label>
                  <ContainerInput>
                    <Input
                      type='text'
                      name="firstName"
                      ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>LastName</Label>
                  <ContainerInput>
                    <Input
                      type='text'
                      name="lastName"
                      ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>Username</Label>
                  <ContainerInput>
                    <Input
                      type='text'
                      name="userName"
                      ref={register({required: false})}
                      />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>Password</Label>
                  <ContainerInput>
                    <Input 
                      type='password' 
                      placeholder='6 characters minimum'
                      name="password"
                      ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>Confirm Password</Label>
                  <ContainerInput>
                    <Input 
                    type='password'
                    name="passwordCheck"
                    ref={register({required: false})}
                    />
                  </ContainerInput>
                </ContainerItems>
                <ContainerItems>
                  <Label>Age</Label>
                  <ContainerInput>
                    <Input 
                    type='number'
                    name="age"
                    ref={register({required: false})}
                    />
                  </ContainerInput>
                  <ContainerButton>
                    <Button
                      type='submit'
                    >REGISTER</Button>
                  </ContainerButton>
                </ContainerItems>
                </Container>
            </Form>
        </Fragment>
    )
}

export default FormRegister
