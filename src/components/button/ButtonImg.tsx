import styled from "styled-components";


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
    background-color: black;
    background-image: url(${props => props.urlImg});
    background-size: contain;
    background-repeat: no-repeat;
    img{
        width: 36px;
        height: 37px;
    }
`