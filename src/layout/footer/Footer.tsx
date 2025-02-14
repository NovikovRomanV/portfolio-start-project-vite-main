import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Image} from "../../components/imag/Image.tsx";
import locationIcon from "../../assents/images/location.png";

type PropsType = {
    iconId: string
    height: string
    width: string
    viewBox: string
}

export const Footer = (props: PropsType) => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <SocialList>
                    <SocialItem><SocialLink href={''}><Icon iconId={props.iconId} height={props.height} width={props.width}
                                           viewBox={props.viewBox}/></SocialLink></SocialItem>
                    <SocialItem><SocialLink href={''}><Icon iconId={props.iconId} height={props.height} width={props.width}
                                           viewBox={props.viewBox}/></SocialLink></SocialItem>
                    <SocialItem><SocialLink href={''}><Icon iconId={props.iconId} height={props.height} width={props.width}
                                           viewBox={props.viewBox}/></SocialLink></SocialItem>
                </SocialList>
                <SocialList>
                    <SocialItem><SocialLink href={''}><Image src={locationIcon} alt={"location icon"} height={"38px"}
                                            width={"38px"}/></SocialLink></SocialItem>
                    <SocialItem><SocialLink href={''}><Image src={locationIcon} alt={"location icon"} height={"38px"}
                                            width={"38px"}/></SocialLink></SocialItem>
                    <SocialItem><SocialLink href={''}><Image src={locationIcon} alt={"location icon"} height={"38px"}
                                            width={"38px"}/></SocialLink></SocialItem>
                </SocialList>
            </FlexWrapper>
            <FlexWrapper justify={'center'} direction={"column"} align={'center'}>
                <Name>Coded by Roman Novikov</Name>
                <Copyright>All Rights Reserved 2022<sup>@</sup></Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 30vh;
    display: flex;
    flex-direction: column;

    gap: 25%;
`

const Copyright = styled.small`

`

const SocialList = styled.ul`

`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Name = styled.h5`
margin: 0;
`