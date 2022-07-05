import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import waveGradientVertical from '../images/wavesGradientVertical.svg';
import waveGradient from '../images/wavesGradient.svg';
import { InvertCircle } from './Circle';
import BouncyHoverLetters from './BouncyHoverLetters';
import { breakpoints } from '../util/breakpoints';
import { colors } from '../util/colors';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${colors.black};
    margin-bottom: 160px;

    .top-z-index {
        z-index: 10;
    }

    div.greeting-content {
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;

        @media (min-width: ${breakpoints.md}) {
            flex-direction: row;
            align-items: center;
        }

        div.greeting-text {
            font-size: 1.1rem;
            margin-left: 8px;
            text-align: center;

            @media (min-width: ${breakpoints.md}) {
                text-align: left;
                font-size: 1.3rem;
            }

            & > * {
                display: flex;
                flex-wrap: wrap;
            }
        }

        div.contact-links {
            display: flex;
            align-items: center;
            gap: 16px;

            @media (min-width: ${breakpoints.md}) {
                flex-direction: column;
            }
        }
    }

    div.invert-circle {
        position: absolute;
        bottom: 0;
        margin-bottom: 32px;
        margin-left: 10vw;
        @media (min-width: ${breakpoints.lg}) {
            margin-left: 20vw;
        }
    }

    & > img {
        width: 100%;
        position: absolute;
        bottom: 0;
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
            <div className="info-block top-z-index">
                <div className="greeting-content">
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
                        <h1>
                            <BouncyHoverLetters word="Hello." />
                        </h1>
                        <h1>
                            <BouncyHoverLetters word="I'm " />
                            <BouncyHoverLetters word="Humberto " />
                            <BouncyHoverLetters word="Gonzalez." />
                        </h1>
                        <h1>
                            <BouncyHoverLetters word="Web " />
                            <BouncyHoverLetters word="Developer." />
                        </h1>
                    </div>
                </div>
            </div>
            <img className="waves" src={waveGradient} alt="gradient-waves" />
            <img
                className="waves-vertical"
                src={waveGradientVertical}
                alt="gradient-waves"
            />
            <InvertCircle
                className="invert-circle"
                size="13rem"
                sizemd="18rem"
                sizelg="24rem"
            />
        </Container>
    );
};

export default Greeting;
