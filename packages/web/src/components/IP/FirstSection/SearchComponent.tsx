import styled from "@emotion/styled";
import React, { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IIPinformation } from "../../../interfaces/IPinterfaces";
import { IError } from "../../../interfaces/ErrorInterface";
import { saveInformationIP, searchIP } from "../../../services/IPServices";
import Alert from "../../Alert";
import { IpInformation } from "./IpInformation";
import { keyframes } from "@emotion/react";
import UserContext from "../../../context/UserContext";

function SearchComponent() {
    const [notSearch, setNotSearch] = useState<boolean>(true);
    const [information, setInformation] = useState<IIPinformation>(
        {} as IIPinformation
    );
    const [err, setErr] = useState<IError>({} as IError);
    const [errSave, setErrSave] = useState<IError>({} as IError);
    const { register, handleSubmit } = useForm();
    const { userData } = useContext(UserContext);
    const Hop = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(-10px,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -30px, 0);
    }

    70% {
        transform: translate3d(0, -15px, 0);
    }

    90% {
        transform: translate3d(0,-4px,0);
    }
    `;
    const Container = styled.div`
        height: 300px;
        margin: auto auto auto auto;
        width: 100%;
        @media (max-width: 900px) {
            height: 400px;
        }
    `;
    const FormInputSearch = styled.form`
        display: flex;
        margin: auto;
        width: 90%;
        @media (max-width: 900px) {
            width: 90%;
        }
    `;
    const InputSearch = styled.input`
        font-size: 17px;
        height: 40px;
        border: none;
        text-align: left;
        width: 90%;
    `;
    const Button = styled.button`
        background: #7f5af0;
        border: none;
        color: #fffffe;
        font-size: 12px;
        font-weight: 700;
        padding: 10px 25px 10px 25px;
        transition: ease 0.8s;
        width: 10%;
        &:hover {
            background: #7f5af0;
            color: #fffffe;
        }
        @media (max-width: 500px) {
            padding: 10px 25px 10px 25px;
        }
    `;
    const ContainerSearchInformation = styled.div`
        background-color: #242629;
        box-shadow: 0 10px 10px #18181a;
        display: flex;
        height: 250px;
        margin: auto;
        width: 90%;
    `;
    //Information ip

    const ContainerInformation = styled.div`
        height: 200px;
        margin: auto;
        width: 80%;
    `;
    const ContainerParagraph = styled.div`
        height: 50px;
        margin: auto;
        width: 90%;
    `;
    const Paragraph = styled.p`
        color: #feeeee;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 2px;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 15px;
        }
    `;
    const ContainerImage = styled.div`
        display: flex;
        height: 140px;
        margin: auto;
        width: 90%;
        @media (max-width: 900px) {
            margin: 10px auto auto auto;
        }
        @media (max-width: 1300px) {
            margin: 20px auto auto auto;
        }
    `;
    const SubContainerImage = styled.div`
        display: flex;
        justify-content: center;
        height: 110px;
        margin: auto;
        width: 80%;
    `;

    const Image = styled.img`
        height: 120px;
        margin: auto;
        width: 150px;
        animation: ${Hop} 1.5s linear;
    `;
    //functions

    async function getIPaddress(data: any, e: any) {
        const result = await searchIP(data.ip);
        if (result.error) {
            setErr({
                error: true,
                message: result.message,
            });
            return;
        }
        if (userData.user) {
            const dataToSend = {
                ip: data.ip,
                country: result.data?.country_name,
                country_capital: result.data?.country_capital,
                city: result.data?.city,
                lat: result.data?.latitude,
                lon: result.data?.longitude,
                postal: result.data?.postal,
                org: result.data?.org,
            };
            const resultToSave = await saveInformationIP(
                dataToSend,
                userData.token
            );
            if (resultToSave.error) {
                setErrSave({
                    error: true,
                    message: resultToSave.message,
                });
            }
        }
        setErr({
            error: false,
            message: "",
        });
        setInformation(result.data!);
        setNotSearch(false);
        return;
    }
    information as any;
    return (
        <Fragment>
            <Container>
                {err.error ? <Alert message={err.message} /> : null}
                {errSave.error ? <Alert message={errSave.message} /> : null}
                <FormInputSearch onSubmit={handleSubmit(getIPaddress)}>
                    <InputSearch
                        type="text"
                        name="ip"
                        ref={register({ required: true })}
                        placeholder="example: 192.104.78.173"
                    />
                    <Button type="submit">&#128270;</Button>
                </FormInputSearch>
                <ContainerSearchInformation>
                    {notSearch ? (
                        <ContainerInformation>
                            <ContainerParagraph>
                                <Paragraph>
                                    Search and get all information of the IP
                                    searched.
                                </Paragraph>
                            </ContainerParagraph>
                            <ContainerImage>
                                <SubContainerImage>
                                    <Image src="https://i.ibb.co/qnQf3ZL/image-first-section-1.png"></Image>
                                </SubContainerImage>
                            </ContainerImage>
                        </ContainerInformation>
                    ) : (
                        <IpInformation data={information} />
                    )}
                </ContainerSearchInformation>
            </Container>
        </Fragment>
    );
}

export default SearchComponent;
