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
        position: fixed;
        top: 0;
        left: 0;

        & > div {
            margin-top: 3rem;
            margin-left: 15rem;
            display: flex;
            justify-content: center;
            align-items: center;
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
                <MorphingCircle size="35rem">
                    <InvertBgCircle size="20rem" />
                </MorphingCircle>
            </div>
            <div className="info-content">
                <Greeting />
                <AboutMe />
            </div>
        </Container>
    );
}

export default App;
