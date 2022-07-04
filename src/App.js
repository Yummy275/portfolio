import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import { MorphingCircle, InvertBgCircle } from './components/Circle';

const Container = styled.div`
    position: relative;

    div.morph-invert-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;

        & > div {
            position: fixed;
            margin-top: 40rem;
            margin-right: -70vw;
        }
    }

    div.info-content {
    }
`;

function App() {
    return (
        <Container className="App">
            <GlobalStyles />
            <div className="morph-invert-circle">
                <MorphingCircle size="30rem" />
                <InvertBgCircle size="20rem" />
            </div>
            <div className="info-content">
                <Greeting />
                <AboutMe />
            </div>
        </Container>
    );
}

export default App;
