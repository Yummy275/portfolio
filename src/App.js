import styled from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import Greeting from './components/Greeting';
import { GreetingCircle } from './components/Circle';

const Container = styled.div`
    display: flex;
    position: relative;

    div.left {
        width: 40%;
    }

    div.right {
        width: 60%;
    }
`;

function App() {
    return (
        <Container className="App">
            <GlobalStyles />
            <div className="left">
                <GreetingCircle size="30rem" />
            </div>
            <div className="right">
                <Greeting />
            </div>
        </Container>
    );
}

export default App;
