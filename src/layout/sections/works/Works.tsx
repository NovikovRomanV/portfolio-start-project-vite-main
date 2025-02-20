import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialNetwork from "../../../assents/images/social-network.png"
import timerImg from "../../../assents/images/timer.png"
import {theme} from "../../../styles/Theme.ts";

const worksItems = ["All", "Landing page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                <StyledTitle>Projects</StyledTitle>
                <Menu menuItems={worksItems}/>
            </FlexWrapper>
            <FlexWrapper gap={"25px"}>
                <Work src={socialNetwork} title={"Social Network"} alt={"image social network"}/>
                <Work src={timerImg} title={"Timer"} alt={"image timer"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledTitle = styled.h2`
 
`
const StyledWorks = styled.section`
    height: 100vh;
    background-color: ${theme.colors.primaryBg};
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    //flex-wrap: wrap;
    gap: 45px;
    padding-top: 65px;
    padding-bottom: 65px;
`

