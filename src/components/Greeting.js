import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import waveGradientVertical from '../images/wavesGradientVertical.svg';
import waveGradient from '../images/wavesGradient.svg';
import { breakpoints } from '../util/breakpoints';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;

    div.greeting-content {
        display: flex;
        flex-direction: column-reverse;
        gap: 1rem;
        padding: 1rem;

        @media (min-width: ${breakpoints.md}) {
            flex-direction: row;
            align-items: center;
        }

        div.greeting-text {
            font-size: 1.4rem;

            @media (min-width: ${breakpoints.md}) {
                font-size: 1.8rem;
            }

            margin-left: 0.5rem;
        }

        div.contact-links {
            display: flex;
            align-items: center;
            gap: 1rem;

            @media (min-width: ${breakpoints.md}) {
                flex-direction: column;
            }
        }
    }

    & > img {
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: -50;
    }

    img.waves {
        display: none;
        @media (min-width: ${breakpoints.md}) {
            display: block;
        }
    }

    img.waves-vertical {
        @media (min-width: ${breakpoints.md}) {
            display: none;
        }
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
            <img
                className="waves-vertical"
                src={waveGradientVertical}
                alt="gradient-waves"
            />
        </Container>
    );
};

export default Greeting;
