import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/colors';
import { Circle } from './Circle';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import hillsBg from '../images/hills.svg';
import blurryGrad from '../images/blurryGradient.svg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${hillsBg});
    background-size: 100% 100%;

    div.content {
        display: flex;
        align-items: center;

        div.greeting-info {
            margin-left: -8rem;
            padding: 2rem;

            div.greeting-text {
                border-radius: 10px;
                padding: 1rem;
                background-color: ${colors.black};
                font-size: 2rem;
            }
        }
    }
`;

const GreetingCircle = styled(Circle)`
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
            <div className="content">
                <GreetingCircle size="30rem" />
                <div className="greeting-info">
                    <div className="greeting-text">
                        <h1>Hello.</h1>
                        <h1>I'm Humberto Gonzalez.</h1>
                        <h1>Web Developer.</h1>
                    </div>
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
                </div>
            </div>
        </Container>
    );
};

export default Greeting;
