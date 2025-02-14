import styled from "styled-components";

type PropsType = {
    src: string
    alt: string
    height?: string
    width?: string
}

export const Image = (props: PropsType) => {
    return (
       <StyleImg src={props.src} alt={props.alt} height={props.height} width={props.width} />
    );
};

const StyleImg = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
`