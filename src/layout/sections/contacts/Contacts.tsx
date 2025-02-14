import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Image} from "../../../components/imag/Image.tsx";
import locationIcon from "../../../assents/images/location.png"
import phoneIcon from "../../../assents/images/phone.png"
import emailIcon from "../../../assents/images/email.png"


export const Contacts = () => {
    return (
        <StyledContacts>
            <h2>Contact us</h2>
            <StyledForm>
                <Field></Field>
                <Field></Field>
                <Field as={"textarea"}></Field>
                <Button name={"Send"} type={"submit"}/>
            </StyledForm>
            <FlexWrapper>
                <ul>
                    <li><Image src={locationIcon} alt={"location icon"} height={"38px"} width={"38px"}></Image>
                        <h4>Россия/Саратов</h4></li>
                    <li><Image src={phoneIcon} alt={"phone icon"} height={"38px"} width={"38px"}></Image><h4>+777777777</h4>
                    </li>
                    <li><Image src={emailIcon} alt={"email icon"} height={"38px"} width={"38px"}></Image><h4>email@yandex.ru</h4>
                    </li>
                </ul>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
margin: 0 auto;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`

const Field = styled.input`


`
