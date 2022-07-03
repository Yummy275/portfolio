import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/colors';
import { Circle } from './Circle';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import hillsBg from '../images/hills.svg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${hillsBg});
    background-size: 100% 100%;

    & > div {
        display: flex;
        align-items: center;
        font-size: 2rem;

        & > div {
            padding: 2rem;
            margin-right: -8rem;
        }
    }
`;

const Greeting = () => {
    return (
        <Container>
            <div>
                <Circle size="20rem" />
                <div>
                    <h1>Hello.</h1>
                    <h1>I'm Humberto Gonzalez.</h1>
                    <h1>Web Developer.</h1>
                    <div>
                        <ContactLink
                            target="mailto:htgonzalez27@gmail.com"
                            icon={email}
                        />
                        <ContactLink
                            icon={linkedin}
                            target="https://www.linkedin.com/in/humberto-gonzalez275/"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Greeting;
