import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


type PropsType = {
    urlImg?: string
}

export const ButtonImg = ({urlImg}: PropsType) => {
    return (
        <StyleButtonImg urlImg={urlImg}/>

    );
};

const StyleButtonImg = styled.button<{ urlImg?: string }>`
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    width: 45px;
    height: 45px;
    background-color: ${theme.colors.primaryBg};
    background-image: url(${props => props.urlImg});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    img{
        width: 36px;
        height: 37px;
    }
`