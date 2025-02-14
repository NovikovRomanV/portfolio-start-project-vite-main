import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {ButtonImg} from "../../components/button/ButtonImg.tsx";
import moon from "../../assents/images/moon.png"


const menuItems = ["Home", "Projects", "About", "Content"]
export const Header = () => {
    return (
        <StyleHeader>
            <Logo/>
            <Menu menuItems={menuItems}/>
            <ButtonImg urlImg={moon}/>
        </StyleHeader>
    )
}

export const StyleHeader = styled.header`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //background: linear-gradient(to right, #24335c 0%,#24335c 28%,#24335c 29%,#24335c 29%,#24335c 30%,#000000 30%,#131313 100%);

`
