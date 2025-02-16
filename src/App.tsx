import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";



function App() {
    return (
        <div className="App">

            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Contacts/>
            <Footer iconId={'reactNewIcon'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
        </div>
    )
}

export default App

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;