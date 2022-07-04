import React from 'react';
import styled from 'styled-components';
import { ScrollingWaves } from './ScrollingWaves';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import { colors } from '../util/colors';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    div.greeting-text {
        padding: 1rem;
        font-size: 1.8rem;
        margin-left: 0.5rem;
        background-color: ${colors.black};
    }

    div.contact-links {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;

const Greeting = () => {
    return (
        <Container>
            <div className="contact-links">
                <ContactLink
                    target="mailto:htgonzalez27@gmail.com"
                    icon={email}
                />
                <ContactLink
                    icon={linkedin}
                    target="https://www.linkedin.com/in/humberto-gonzalez275/"
                />
            </div>
            <div className="greeting-text">
                <h1>Hello.</h1>
                <h1>I'm Humberto Gonzalez.</h1>
                <h1>Web Developer.</h1>
            </div>
            <ScrollingWaves />
        </Container>
    );
};

export default Greeting;
