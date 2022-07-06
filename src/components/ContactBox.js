import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import BouncyHoverLetters from './BouncyHoverLetters';
import { breakpoints } from '../util/breakpoints';
import { colors } from '../util/colors';
import { FadeShiftIn } from './FadeAnimations';

const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;

    .box-content {
        display: flex;
        flex-direction: column-reverse;
        gap: 16px;
        padding: 24px;

        @media (min-width: ${breakpoints.md}) {
            flex-direction: row;
            align-items: center;
        }

        .box-text {
            animation: ${FadeShiftIn('10px', '10px')} 0.3s ease-in forwards;
            opacity: 0;
            font-size: 1.1rem;
            margin-left: 8px;
            height: initial;

            @media (min-width: ${breakpoints.md}) {
                font-size: 1.3rem;
            }

            & > * {
                display: flex;
                flex-wrap: wrap;
            }
        }

        .contact-links {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            transition: all 5s ease;

            @media (min-width: ${breakpoints.md}) {
                flex-direction: column;
            }
        }
    }
`;

const GreetingMsg = (
    <>
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
    </>
);

const ContactMsg = (
    <>
        <h2>
            <BouncyHoverLetters word="Contact Me." />
        </h2>
    </>
);

const ContactBox = () => {
    const [transformTrigger, setTransformTrigger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.pageYOffset;
            const triggerVal = 300;
            if (transformTrigger && scrollPos < triggerVal) {
                setTransformTrigger(false);
            }
            if (!transformTrigger && scrollPos >= triggerVal) {
                setTransformTrigger(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [transformTrigger]);

    return (
        <Container>
            <div className="info-block">
                <div className="box-content">
                    {transformTrigger ? (
                        <>
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
                            <div className="box-text" key="contact">
                                {ContactMsg}
                            </div>
                        </>
                    ) : (
                        <div className="box-text" key="greet">
                            {GreetingMsg}
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default ContactBox;
