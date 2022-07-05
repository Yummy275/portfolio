import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {
    MorphingCircleSm,
    MorphingCircleLg,
    InvertBgCircle,
} from './components/Circle';
import { breakpoints } from './util/breakpoints';

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
            margin-right: -10vw;

            @media (min-width: ${breakpoints.md}) {
                margin-right: -70vw;
            }
        }

        .morphing-circle {
            z-index: -10;
        }

        .invert-circle {
            z-index: 5;
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
                <MorphingCircleSm
                    className="morphing-circle"
                    size="18rem"
                    sizemd="26rem"
                    sizelg="34rem"
                />
                <MorphingCircleLg
                    className="morphing-circle"
                    size="22rem"
                    sizemd="30rem"
                    sizelg="38rem"
                />
                <InvertBgCircle
                    className="invert-circle"
                    size="12rem"
                    sizemd="16rem"
                    sizelg="22rem"
                />
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
