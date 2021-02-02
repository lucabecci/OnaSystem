import styled from '@emotion/styled'
import React, { Fragment, useContext, useEffect, useState} from 'react'
import UserContext from '../../../context/UserContext'
import { IIPinformationGet } from '../../../interfaces/IPinterfaces'
import { IUser } from '../../../interfaces/UserInterfaces'
import { getAllIP } from '../../../services/IPServices'
import IPsearches from './IPsearches'

interface Props {
    logged: null | IUser
}

function InformationSecondSection(props: Props) {
    const {userData} = useContext(UserContext)
    const [reload, setReload] = useState(0)
    useEffect(() => {
        async function getData(){
           if(userData.user){
                const result = await getAllIP(userData.token!)
                if(result.data.length < 1){
                    return
                }
                setData(result.data)
                setLoaded(true)
           }
           return
        }
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])
    const [data, setData] = useState<IIPinformationGet[]>({} as IIPinformationGet[])
    const [loaded, setLoaded] = useState(false)

    const Container = styled.div`
        height: 100px;
        margin: auto;
        width: 50%;
        @media (max-width: 900px) {
            height: 100px;
            width: 90%;
        }
    `
    //not logged in css opened
    const MainContainerUnLogged = styled.div`
        height: 250px;
        display: flex;
        justify-content: center;
        margin: auto;
        width: 50%;
        @media (max-width: 900px) {
            height: 250px;
            width: 100%;
        }
    `
    const ContainerUnLogged = styled.div`
        height: 200px;
        margin: auto;
        width: 80%;
        @media (max-width: 900px) {
            height: 150px;
            width: 90%;
        }
    `
    const ContainerButtonUnLogged = styled.div`
        display: flex;
        justify-content: center;
        height: 50px;
        margin: 15px auto auto auto;
        width: 80%;
        @media (max-width: 900px) {
            height: 60px;
            width: 90%;
        }
    `
    const ButtonUnLogged = styled.button`
        background: transparent;
        border: 2px solid #7f5af0;
        border-radius: 5px;
        color: #fffffe;
        display: block;
        font-size: 12px;
        font-weight: 700;
        padding: 10px 25px 10px 25px;
        transition: ease .8s;
        &:hover{
            background: #7f5af0;
            color: #fffffe;
        }
        @media (max-width: 500px) {
            padding: 20px 25px 20px 25px;
        }
    `
    //not logged in css closed
    const Title = styled.h3`
        color: white;
        font-size: 25px;
        font-weight: 400;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 18px;
        }
    `
    const Paragraph = styled.h3`
        color: #94a1b2;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
    `
    const ContainerTable = styled.div`
        height: 300px;
        margin: 30px auto auto auto;
        width: 70%;
        @media (max-width: 1024px) {
            margin: 50px auto auto auto;
        }
        @media (max-width: 620px) {
            margin: 20px auto auto auto;
            height: 300px;
            width: 95%;
        }
    `
    const MainContainerReload = styled.div`
        display: flex;
        justify-content: center;
        margin: 5px;
        width: 100%;    
    `
    const Reload = styled.button`
        background: transparent;
        border: 2px solid #7f5af0;
        border-radius: 5px;
        color: #fffffe;
        font-size: 15px;
        font-weight: 700;
        padding: 5px 10px 5px 10px;
        transition: ease .8s;
        &:hover{
            background: #7f5af0;
            color: #fffffe;
        }
        @media (max-width: 500px) {
            padding: 5px 10px 5px 10px;
        }
    `
    return (
        <Fragment>
            {props.logged ? 
            (
                <Fragment>
                    <Container>
                        <Title>ON HERE YOU CAN SEE YOUR ALL SEARCHES WITH IP INFORMATION</Title>
                        <Paragraph>The maximum for save is 10 searchs</Paragraph>
                        <MainContainerReload>
                                <Reload 
                                onClick={(e) => setReload(reload+1)}
                                >&#x21bb;</Reload>
                        </MainContainerReload>
                    </Container>
                    <ContainerTable>
                        {
                           loaded ? <IPsearches searchs={data}/>
                            : null
                        }
                    </ContainerTable> 
                </Fragment>
            )
            :
            (
                <MainContainerUnLogged>
                    <ContainerUnLogged>
                        <Title>REGISTER IN THE APP FOR SAVE ALL SEARCHES AND HAVE MORE TOOLS</Title>
                        <ContainerButtonUnLogged>
                            <ButtonUnLogged>STARTED NOW</ButtonUnLogged>
                        </ContainerButtonUnLogged>
                    </ContainerUnLogged>
                </MainContainerUnLogged>
            )
        }
        </Fragment>
    )
}

export default InformationSecondSection
