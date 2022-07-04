import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import { colors } from '../util/colors';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    margin-left: 10rem;
    border: 1px solid ${colors.white};

    div.greeting-text {
        padding: 1rem;
        font-size: 1.8rem;
        margin-left: 0.5rem;
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
        </Container>
    );
};

export default Greeting;
