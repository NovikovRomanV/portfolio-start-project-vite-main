import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {ButtonImg} from "../../components/button/ButtonImg.tsx";
import moon from "../../assents/images/moon.png"
import {theme} from "../../styles/Theme.ts";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


const menuItems = ["Home", "Projects", "About", "Content"]
export const Header = () => {
    return (
        <StyleHeader>
            <Container>
                <FlexWrapper justify={"space-between"} >
                    <Logo/>
                    <FlexWrapper align={"center"} gap={"64px"}>
                        <Menu menuItems={menuItems}/>
                        <ButtonImg urlImg={moon}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyleHeader>
    )
}

export const StyleHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    //background: linear-gradient(to right, #24335c 0%,#24335c 28%,#24335c 29%,#24335c 29%,#24335c 30%,#000000 30%,#131313 100%);

`
