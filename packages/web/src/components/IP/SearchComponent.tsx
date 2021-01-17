import styled from '@emotion/styled'
import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { IIPinformation } from '../../interfaces/IPinterfaces';
import { IError } from '../../interfaces/ErrorInterface';
import { searchIP } from '../../services/IPServices';
import Alert from '../Alert';

function SearchComponent() {
    const [notSearch, setNotSearch] = useState<boolean>(true)
    const [information, setInformation] = useState<IIPinformation>({} as IIPinformation)
    const [err, setErr] = useState<IError>({} as IError)
    const {register, handleSubmit} = useForm();
    const Container = styled.div`
        height: 300px;
        margin: auto;
        width: 100%;
    `
    const FormInputSearch = styled.form`
        display: flex;
        margin: auto;    
        width: 90%;
    `
    const InputSearch = styled.input`
        font-size: 17px;
        height: 40px;
        border: none;
        text-align: left;
        width: 90%;
    `
    const Button = styled.button`
        background: #7f5af0;
        border: none;
        color: #fffffe;
        font-size: 12px;
        font-weight: 700;
        padding: 10px 25px 10px 25px;
        transition: ease .8s;
        width: 10%;
        &:hover{
            background: #7f5af0;
            color: #fffffe;
        }
        @media (max-width: 500px) {
            padding: 15px;
        }
    `
    const ContainerSearchInformation = styled.div`
        background-color:#242629;
        box-shadow: 0 10px 10px #18181a;
        display: flex;
        height: 250px;
        margin: auto;
        width: 90%;
    ` 
    //Information ip

    const ContainerInformation = styled.div`
        height: 200px;
        margin: auto;
        width: 80%;
    `
    const ContainerParagraph = styled.div`
        height: 50px;
        margin: auto;
        width: 90%;
    `
    const Paragraph = styled.p`
        color: #FEEEEE;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 2px;
        text-align: center;
    `
    const ContainerImage = styled.div`
        display: flex;
        height: 140px;
        margin: auto;
        width: 90%;
    `
    const SubContainerImage = styled.div`
        display: flex;
        justify-content: center;
        height: 110px;
        margin: auto;
        width: 80%;
    `

    const Image = styled.img`
        height: 120px;
        margin: auto;
        width: 150px;
    `
    //functions

    async function getIPaddress(data: any, e: any){
        console.log(data)
        const result = await searchIP(data.ip)
        if(result.error){
            setErr({
                error: true,
                message: result.message
            })
            return
        }
        setInformation(result.data!)
        setNotSearch(false)
    }
    information as any
    return (
        <Fragment>
            <Container>
                {err.error ?
                <Alert message={err.message}/>
                :
                null    
            }
                <FormInputSearch
                    onSubmit={handleSubmit(getIPaddress)}
                >
                    <InputSearch
                        type='text'
                        name='ip'
                        ref={register({required: true})}
                        placeholder='example: 192.104.78.173'
                    />
                    <Button type='submit'>&#128270;</Button>
                </FormInputSearch>
                <ContainerSearchInformation>
                {
                    notSearch ? 
                    <ContainerInformation>
                        <ContainerParagraph>
                            <Paragraph>Search and get all information of the IP searched.</Paragraph>
                        </ContainerParagraph>
                        <ContainerImage>
                           <SubContainerImage>
                            <Image src='https://i.ibb.co/qnQf3ZL/image-first-section-1.png'></Image>
                           </SubContainerImage>
                        </ContainerImage>
                    </ContainerInformation> 
                    :
                    null
                }
                </ContainerSearchInformation>
            </Container>
        </Fragment>
    )
}

export default SearchComponent
