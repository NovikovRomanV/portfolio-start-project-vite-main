import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {ButtonImg} from "../../components/button/ButtonImg.tsx";
import moon from "../../assents/images/moon.png"
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";


const menuItems = ["Home", "Projects", "About", "Contact"]

export const Header = () => {
    return (
        <StyleHeader>
            {/*<Container>*/}
                <FlexWrapper justify={"space-between"} >
                    <Logo/>
                    <FlexWrapper align={"center"} gap={"64px"}>
                        <HeaderMenu menuItems={menuItems}/>
                        <ButtonImg urlImg={moon}/>
                    </FlexWrapper>
                </FlexWrapper>
            {/*</Container>*/}
        </StyleHeader>
    )
}

export const StyleHeader = styled.header`
    max-width: 1422px;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    margin: 0 auto;
`
