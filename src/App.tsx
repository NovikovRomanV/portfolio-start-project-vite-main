import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import styled from "styled-components";
import {theme} from "./styles/Theme.ts";




function App() {
    return (
        <div className="App">
<ContainerHeader>

    <Header/>
    <Main/>
    <Skills/>
</ContainerHeader>

            <Works/>
            <AboutMe/>
            <Contacts/>
            <Footer iconId={'reactNewIcon'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
        </div>
    )
}

export default App


const ContainerHeader = styled.div`
    min-height: 750px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, ${theme.colors.secondaryBg} 0%, ${theme.colors.secondaryBg} 28%, ${theme.colors.secondaryBg} 29%, ${theme.colors.secondaryBg} 29%, ${theme.colors.secondaryBg} 30%, ${theme.colors.primaryBg} 30%, ${theme.colors.primaryBg} 100%);
`
