import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {FlexWrapper} from "./components/FlexWrapper.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <FlexWrapper wrap="wrap">
                <Skills iconId={'jsIcon'} titleSkills={'JS'} height={'55px'} width={'55px'} viewBox={"0 0 55 55"}/>
                <Skills iconId={'htmlIcon'} titleSkills={'JS'} height={'100px'} width={'100px'} viewBox={"0 0 100 100"}/>
                <Skills iconId={'reactNewIcon'} titleSkills={'JS'} height={'50px'} width={'50px'} viewBox={"0 0 50 50"}/>
                <Skills iconId={'jsIcon'} titleSkills={'JS'} height={'100px'} width={'100px'} viewBox={"0 0 100 100"}/>
                <Skills iconId={'jsIcon'} titleSkills={'JS'} height={'100px'} width={'100px'} viewBox={"0 0 100 100"}/>
            </FlexWrapper>
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