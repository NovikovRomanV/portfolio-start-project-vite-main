import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.ts";


type PropsType = {
    iconId: string
    titleSkills: string
    height: string
    width: string
    viewBox: string
}
export const Skill = (props: PropsType) => {
    return (
        <StyledSkill>
            <StyledIconWrapper>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            </StyledIconWrapper>
            <StyledTitle>{props.titleSkills}</StyledTitle>
        </StyledSkill>
    );
};

const StyledTitle = styled.h2`
    border-radius: 24px;
    width: 161px;
    height: 91px;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
    background: #24335c;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
   
`

const StyledSkill = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 15px;
    
`
const StyledIconWrapper = styled.div`
    border-radius: 50%; 
    padding: 10px;
    position: relative; 
    margin-bottom: -30px;
    background-color: ${theme.colors.primaryBg};
`;