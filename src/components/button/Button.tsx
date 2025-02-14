import styled from "styled-components";

type PropsType = {
    name: string
    type: "button" | "submit" | "reset" | undefined
}
export const Button = (props: PropsType) => {
    return (
        <StyledButton type={props.type}>
            {props.name}
        </StyledButton>
    );
};

const StyledButton = styled.button`


`