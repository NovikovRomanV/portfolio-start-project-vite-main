import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type PropsType = {
    src: string
    title: string
    alt: string
}

export const Work = (props: PropsType) => {
    return (
        <StyledWork>
            <StyledImg src={props.src} alt={props.alt} />
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledTitle>{props.title}</StyledTitle>
                <FlexWrapper gap={"20px"}>
                    <Link>Code</Link>
                    <Link>Demo</Link>
                </FlexWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const Link = styled.a`

`
const StyledImg = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const StyledTitle = styled.h2`

`
const StyledWork = styled.div`
    border-radius: 10px;
    border: 3px solid black;
    max-width: 270px;
    width: 100%;
`