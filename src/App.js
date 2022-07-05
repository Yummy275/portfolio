import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import InvertBallWave from './components/InvertBallWave';
import MessageBox from './components/MessageBox';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
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
            margin-top: 620px;
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
            <div className="main-circles">
                <MorphingCircles />
            </div>
            <InvertBallWave />
            <MessageBox />
            <div className="info-content">
                <AboutMe />
                <Projects />
            </div>
        </Container>
    );
}

export default App;
