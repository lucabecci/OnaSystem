import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import NavbarOptions from "./NavbarOptions";
import { useHistory } from "react-router-dom";
function Navbar(): React.FunctionComponentElement<HTMLAllCollection> {
    const [toggle, setToggle] = useState("none");
    const history = useHistory();

    const Nav = styled.nav`
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        background-color: #16161a;
        color: #fffffe;
        @media (max-width: 800px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `;

    const NavTitle = styled.div`
        color: #fffffe;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0.5rem;
    `;

    const ToggleButton = styled.a`
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        @media (max-width: 800px) {
            display: flex;
        }
    `;

    const SpanButton = styled.span`
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    `;

    const ContainerLink = styled.div`
        height: 100%;
        @media (max-width: 800px) {
            display: ${toggle};
            width: 100%;
        }
    `;

    const UlLinks = styled.ul`
        display: flex;
        margin: 0;
        padding: 0;
        @media (max-width: 800px) {
            width: 100%;
            flex-direction: column;
        }
    `;
    function changeToggle() {
        if (toggle === "flex") {
            setToggle("none");
            return;
        }
        setToggle("flex");
        return;
    }

    const home = () => history.push("/");
    return (
        <Fragment>
            <Nav>
                <NavTitle onClick={() => home()}>ONA SYSTEM</NavTitle>
                <ToggleButton onClick={() => changeToggle()}>
                    <SpanButton></SpanButton>
                    <SpanButton></SpanButton>
                    <SpanButton></SpanButton>
                </ToggleButton>
                <ContainerLink>
                    <UlLinks>
                        <NavbarOptions></NavbarOptions>
                    </UlLinks>
                </ContainerLink>
            </Nav>
        </Fragment>
    );
}

export default Navbar;
