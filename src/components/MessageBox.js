import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import BouncyHoverLetters from './BouncyHoverLetters';
import { breakpoints } from '../util/breakpoints';
import { colors } from '../util/colors';

const Container = styled.div`
    position: absolute;
    top: 0;
    z-index: 10;
    padding: 36px;

    .greeting-content {
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;

        @media (min-width: ${breakpoints.md}) {
            flex-direction: row;
            align-items: center;
        }

        .greeting-text {
            font-size: 1.1rem;
            margin-left: 8px;

            @media (min-width: ${breakpoints.md}) {
                font-size: 1.3rem;
            }

            & > * {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                @media (min-width: ${breakpoints.md}) {
                    justify-content: flex-start;
                }
            }
        }

        .contact-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;

            @media (min-width: ${breakpoints.md}) {
                flex-direction: column;
            }
        }
    }
`;

const MessageBox = () => {
    return (
        <Container>
            <div className="info-block">
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
        </Container>
    );
};

export default MessageBox;
