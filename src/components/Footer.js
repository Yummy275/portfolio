import React from 'react';
import styled from 'styled-components';
import blobAni from '../images/blobanimation.svg';
import { breakpoints } from '../util/breakpoints';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;

    .farewell-msg {
        margin-top: 20px;
    }

    .message {
        padding: 10px;
        z-index: 10;
    }

    img {
        height: auto;
        width: 100%;
        max-width: 600px;
        position: absolute;
        margin-left: -100px;
        z-index: -5;
        margin-top: -120px;

        @media (min-width: ${breakpoints.md}) {
            margin-top: -200px;
        }
    }
`;

const Footer = () => {
    return (
        <Container>
            <div className="info-block">
                <img src={blobAni} alt="blob-animation" />
                <div className="message">
                    <h2>Thank you for visiting!</h2>
                    <h3 className="farewell-msg">
                        I typically respond within a day so reach out and let's
                        get to work.
                    </h3>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
