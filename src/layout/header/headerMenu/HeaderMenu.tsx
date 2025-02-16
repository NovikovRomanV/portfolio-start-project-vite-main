import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";

type PropsType = {
    menuItems: string[]
}

export const HeaderMenu = (props: PropsType) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={''}>
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}

            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    display: flex;

    ul {
        display: flex;
        gap: 58px;
    }
`



const Link = styled.a`
    font-family: "Roboto", serif;
    font-size: 16px;
    text-align: center;
    color: transparent;
`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.font};

    & + & {
        top: 50%;
        span{
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.secondaryBg};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before{
            transform: scale(1);
        }
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.secondaryBg};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`