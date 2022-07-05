import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { MorphingCircles } from './components/Circle';
import { breakpoints } from './util/breakpoints';

const Container = styled.div`
    position: relative;

    div.main-circles {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;

        & > div {
            position: fixed;
            margin-top: 40rem;
            margin-right: -10vw;
            z-index: -20;
            @media (min-width: ${breakpoints.md}) {
                margin-right: -70vw;
            }
        }
    }

    div.info-content {
    }
`;

function App() {
    return (
        <Container className="App">
            <GlobalStyles />
            <div className="main-circles">
                <MorphingCircles />
            </div>
            <div className="info-content">
                <Greeting />
                <AboutMe />
                <Projects />
                <Footer />
            </div>
        </Container>
    );
}

export default App;
