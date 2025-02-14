import styled from "styled-components";

type PropsType = {
    menuItems: string[]
}

export const Menu = (props: PropsType) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}><a href={''}>{item}</a></li>
                } )}

            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 68px;
    ul {
        display: flex;
        flex-direction: row;
        gap: 58px;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: white
    }
`