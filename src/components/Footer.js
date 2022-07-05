import React from 'react';
import styled from 'styled-components';
import { ContactLink } from './ContactLink';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import { colors } from '../util/colors';

const Container = styled.div`
    margin-top: 160px;
    background-color: ${colors.blue};
    padding: 16px;

    .contact-links {
        display: flex;
        margin-top: 32px;
        gap: 32px;
        text-align: center;
    }
`;

const Footer = () => {
    return (
        <Container>
            <div className="info-block">
                <h1>Contact me</h1>
                <div className="contact-links">
                    <div>
                        <ContactLink
                            target="mailto:htgonzalez27@gmail.com"
                            icon={email}
                        />
                        <h3>Email</h3>
                    </div>
                    <div>
                        <ContactLink
                            icon={linkedin}
                            target="https://www.linkedin.com/in/humberto-gonzalez275/"
                        />
                        <h3>LinkedIn</h3>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
