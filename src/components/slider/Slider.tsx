import styled from "styled-components";
import photoWork from "../../assents/images/workHard.jpeg";

export const Slider = () => {
    return (
        <StyleSlider>
            <Slide>
                <StyledPhoto src={photoWork} alt={''}/>
                <StyledText>bla bla</StyledText>
                <StyledTitle>Work hard</StyledTitle>
            </Slide>

        </StyleSlider>
    );
};
const StyledPhoto = styled.img`

`
const StyledText = styled.p`

`
const StyledTitle = styled.h3`

`

const Slide = styled.div`

    text-align: center;
`

const StyleSlider = styled.div`
border: 2px solid yellow;
    max-width: 500px;
`