import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import InvertBallWave from './components/InvertBallWave';
import ContactBox from './components/ContactBox';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
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

    .info-content {
        .gradient-bg {
            background-image: linear-gradient(
                to bottom,
                #114669,
                #183f5b,
                #1b374e,
                #1d3041,
                #1d2935
            );
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
                <div className="gradient-bg">
                    <AboutMe />
                    <Projects />
                </div>
                <Footer />
            </div>
        </Container>
    );
}

export default App;
