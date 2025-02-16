import styled from "styled-components";


type PropsType = {
    menuItems: string[]
}

export const Menu = (props: PropsType) => {
    return (
        <StyleMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={''}>
                            {item}
                        </Link>
                    </ListItem>
                })}

            </ul>
        </StyleMenu>
    );
};

const StyleMenu = styled.nav`
    display: flex;
    
    gap: 68px;

    ul {
        display: flex;
        
        gap: 58px;
    }


`
const ListItem = styled.li`
    
`

const Link = styled.a`
    font-family: "Roboto", serif;
    font-size: 16px;
`
