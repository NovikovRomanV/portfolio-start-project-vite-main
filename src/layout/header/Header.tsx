import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {ButtonImg} from "../../components/button/ButtonImg.tsx";
import moon from "../../assents/images/moon.png"
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";


const menuItems = ["Home", "Projects", "About", "Content"]

export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify={"space-between"} >
                    <Logo/>
                    <FlexWrapper align={"center"} gap={"64px"}>
                        <HeaderMenu menuItems={menuItems}/>
                        <ButtonImg urlImg={moon}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    )
}

export const StyleHeader = styled.header`
    //background-color: ${theme.colors.primaryBg};
    //background: linear-gradient(to right, ${theme.colors.secondaryBg} 0%,${theme.colors.secondaryBg} 28%,${theme.colors.secondaryBg} 29%,${theme.colors.secondaryBg} 29%,${theme.colors.secondaryBg} 30%,${theme.colors.primaryBg} 30%,${theme.colors.primaryBg} 100%);

`
