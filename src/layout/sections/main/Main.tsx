import photo from "../../../assents/images/photo.jpg"
import styled from "styled-components";
import plus from "../../../assents/images/plus.svg"
import ellipse from "../../../assents/images/ellipse.svg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Main = () => {
    return (
        <StyledMain>
            <ImgPlus src={plus}/>
            <ImgEllipse src={ellipse}/>
            <Bgr>
                <FlexWrapper gap={"35px"} align={"center"}>
                    <MainPhoto src={photo} alt={'photo'}/>
                    <FlexWrapper direction={"column"}>
                        <MainHi>Hi There</MainHi>
                        <Name>I am <span>Roman</span> Novikov</Name>
                        <MainTitle>a Web Developer.</MainTitle>
                    </FlexWrapper>
                </FlexWrapper>
            </Bgr>


        </StyledMain>
    );
};

const MainTitle = styled.h1`
    color: ${theme.colors.font};
    font-weight: bold;
    font-size: 27px;
`
const Name = styled.h2`
    color: ${theme.colors.font};
    font-weight: bold;
    font-size: 50px;

    span {
        font-weight: bold;
        font-size: 50px;
        color: #2157F2;
    }
`
const ImgPlus = styled.img`
    position: absolute;
    top: -60px;
    left: 400px;
    width: 110px;
    height: 110px;

`

const ImgEllipse = styled.img`
    position: absolute;
    left: 1005px;
    top: 225px;
`

const Bgr = styled.div`
    max-width: 1158px;
    width: 100%;
    border-radius: 200px 0;
    backdrop-filter: blur(5px);
    background: linear-gradient(132deg, rgba(57, 57, 57, 0.5) 0%, rgba(0, 66, 255, 0.05) 100%);
    border: 3px solid #838383;
    display: flex;
    justify-content: center;
    position: relative;
`

const StyledMain = styled.section`
    margin: 0 auto;
    max-width: 1158px;
    width: 100%;
    display: flex;
    position: relative;
`
const MainHi = styled.span`
    color: ${theme.colors.font};
    font-size: 20px;
`

const MainPhoto = styled.img`
    width: 301px;
    height: 301px;
    border: 25px solid #fff;
    border-radius: 334px;
    background: #24335c;
    transform: rotate(3deg);
    object-fit: cover;
    margin-top: 35px;
    margin-bottom: 35px;
`
