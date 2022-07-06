import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import InvertBallWave from './components/InvertBallWave';
import ContactBox from './components/ContactBox';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { breakpoints } from './util/breakpoints';

const Container = styled.div`
    .main-circles {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;

        & > div {
            position: fixed;
            margin-top: 1000px;
            margin-right: -10vw;
            z-index: -20;
            @media (min-width: ${breakpoints.md}) {
                margin-right: -70vw;
            }
        }
    }
`;

function App() {
    return (
        <Container className="App">
            <GlobalStyles />
            <ContactBox />
            <div className="info-content">
                <InvertBallWave />
                <AboutMe />
                <Projects />
            </div>
        </Container>
    );
}

export default App;
