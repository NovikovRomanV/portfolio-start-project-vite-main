import photo from "../../../assents/images/photo.jpg"
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"}>
                    <img src={photo} alt={'photo'}/>
                    <div>
                        <span>Hi There</span>
                        <Name>I am Roman Novikov</Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const MainTitle = styled.h1`
    color: white;
`
const Name = styled.h2`
    color: white;
`

const StyledMain = styled.section`
    margin: 0 auto;
    //display: flex;
    //justify-content: space-around;
    //align-items: center;
    //position: absolute;
    //top: 180px;
    //left: 100px;
    //z-index: 1;
    border-radius: 200px 0;
    width: 1158px;
    height: 507px;
    backdrop-filter: blur(20px);
    background: linear-gradient(132deg, rgba(57, 57, 57, 0.5) 0%, rgba(0, 66, 255, 0.05) 100%);
    border: 3px solid #838383;

    img {
        width: 301px;
        height: 301px;
        border: 25px solid #fff;
        border-radius: 334px;
        background: #24335c;
        transform: rotate(3deg);
        object-fit: cover;
    }

    span {
        color: white;
    }
`