import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <TitleAboutMe>About Me</TitleAboutMe>
            <Slider/>
        </StyledAboutMe>
    );
};

const TitleAboutMe = styled.h2`
margin-top: 75px;
`

const StyledAboutMe = styled.section`
   
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 150px;
`