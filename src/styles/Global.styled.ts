import {createGlobalStyle} from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@font-face {
    font-family: "Kalameh";
    src: local("Kalameh"),
    url(../assents/fonts/KalamehBold.eot) format("eot"),
    url(../assents/fonts/KalamehBold.woff2) format("woff2"),
    url(../assents/fonts/KalamehBold.ttf) format("truetype");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
body {
    margin: 0;
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
button{
    background-color: unset;
    border: none;
}
`