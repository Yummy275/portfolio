import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';
import { Circle } from './Circle';
import { ContactLink } from './ContactLink';
import { ScrollingWaves } from './ScrollingWaves';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import blurryGrad from '../images/blurryGradient.svg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    div.content {
        display: flex;
        height: fit-content;

        div.greeting-info {
            display: flex;
            align-items: center;
            padding: 2rem;
            height: fit-content;
            margin-left: 10rem;

            div.greeting-text {
                padding: 1rem;
                font-size: 2rem;
                margin-left: 0.5rem;
            }

            div.contact-links {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }
    }
`;

const Blob = keyframes`
    0% { border-radius: 50%}
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 

`;

const GreetingCircle = styled(Circle)`
    animation: ${Blob} 10s ease infinite alternate;

    :hover {
        background-image: url(${blurryGrad});
        background-size: cover;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`;

const Greeting = () => {
    return (
        <Container>
            <ScrollingWaves />
            <div className="content">
                <GreetingCircle size="30rem" />
                <div className="greeting-info">
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
            </div>
        </Container>
    );
};

export default Greeting;
