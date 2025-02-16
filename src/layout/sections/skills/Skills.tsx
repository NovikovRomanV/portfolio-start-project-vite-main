import styled from "styled-components";
import {Skill} from "./skill/Skill.tsx";



export const Skills = () => {
    return (
        <StyledSkills>
           <Skill iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
           <Skill iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
           <Skill iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
           <Skill iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
           <Skill iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`
