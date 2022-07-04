import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import waveGradient from '../images/wavesGradient.svg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;

    div.greeting-content {
        display: flex;
        align-items: center;
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
    }

    img.waves {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -50;
    }
`;

const Greeting = () => {
    return (
        <Container>
            <div className="greeting-content info-block">
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
            </div>
            <img className="waves" src={waveGradient} alt="gradient-waves" />
        </Container>
    );
};

export default Greeting;
